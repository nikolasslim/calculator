export default class BaseCommand {
  static name = '';

  execute(state) {
    const value = parseFloat(state.currentInput);
    const result = this.performOperation(value);
    state.currentInput = result.toString();
    state.updateDisplay();
  }

  performOperation(value) {
    throw new Error('performOperation must be implemented by subclass');
  }
}


