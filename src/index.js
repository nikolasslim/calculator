import './index.css';
import * as commands from './js/commands/index';
import { CommandInvoker } from './js/service/commandInvoker';
import { isValidNumber } from './js/utils/validate';
import { appendDigit } from './js/utils/append';

class Calculator {
  constructor() {
    this.display = document.getElementById('display');
    this.memory = 0;
    this.currentInput = '';
    this.leftOperand = null;
    this.operator = null;
    this.pendingFunction = '';
    this.invoker = new CommandInvoker();
    Object.entries(commands).forEach(([key, CommandClass]) => {
      this.invoker.registerCommand(
        CommandClass.name || key,
        new CommandClass()
      );
    });
  }

  executeCommand(commandName) {
    if (this.invoker.commands[commandName]) {
      this.invoker.executeCommand(commandName, this);
    }
  }

  updateDisplay() {
    this.display.value = this.currentInput || '0';
  }
}

const calculator = new Calculator();

document.getElementById('buttons').addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName !== 'BUTTON') return;

  const commandType = target.getAttribute('data-command');
  const value = target.getAttribute('data-value');

  if (commandType === 'digit') {
    calculator.currentInput = appendDigit(calculator.currentInput, value);
    calculator.updateDisplay();
  } else {
    const requiresNumberInput = [
      'add',
      'subtract',
      'multiply',
      'divide',
      'percent',
      'negate',
      'square',
      'cube',
      'power',
      'power10',
      'inverse',
      'sqrt',
      'cbrt',
      'root',
      'factorial',
      'memoryAdd',
      'memorySubtract',
      'calculate',
    ];
    if (
      requiresNumberInput.includes(commandType) &&
      !isValidNumber(calculator.currentInput)
    ) {
      calculator.display.value = 'Ошибка';
      calculator.currentInput = '';
      calculator.leftOperand = null;
      calculator.operator = null;
      calculator.pendingFunction = '';
      return;
    }
    calculator.executeCommand(commandType);
  }
});

calculator.updateDisplay();
