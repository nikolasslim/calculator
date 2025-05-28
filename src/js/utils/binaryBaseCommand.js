export default class BinaryBaseCommand {
  static name = '';

  execute(state) {
    if (state.leftOperand !== null && state.operator) {
      state.invoker.executeCommand('calculate', state);
    }
    state.leftOperand = parseFloat(state.currentInput);
    state.currentInput = '';
    state.operator =
      this.constructor.operator || this.constructor.name.toLowerCase();
    state.pendingFunction = '';
    state.updateDisplay();
  }

  performOperation(left, right) {
    throw new Error('performOperation must be implemented by subclass');
  }
}
