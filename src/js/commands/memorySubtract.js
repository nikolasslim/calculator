export default class MemorySubtractCommand {
  static name = 'memorySubtract';

  execute(state) {
    state.memory -= parseFloat(state.currentInput);
    state.currentInput = '';
    state.updateDisplay();
  }
}
