export default class CalculateCommand {
  static name = 'calculate';

  execute(state) {
    if (state.leftOperand === null || !state.operator) {
      return;
    }
    const rightOperand = parseFloat(state.currentInput);
    const command = state.invoker.commands[state.operator];
    if (!command || typeof command.performOperation !== 'function') {
      state.currentInput = 'Error';
      state.updateDisplay();
      return;
    }
    const result = command.performOperation(state.leftOperand, rightOperand);
    state.currentInput = result.toString();
    state.leftOperand = null;
    state.operator = null;
    state.updateDisplay();
  }
}
