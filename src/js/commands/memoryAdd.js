export default class MemoryAddCommand {
  static name = 'memoryAdd';

  execute(state) {
    state.memory += parseFloat(state.currentInput);
    state.currentInput = '';
    state.updateDisplay();
  }
}
