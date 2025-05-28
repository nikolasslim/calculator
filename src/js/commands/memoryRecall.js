export default class MemoryRecallCommand {
  static name = 'memoryRecall';

  execute(state) {
    state.currentInput = state.memory.toString();
    state.updateDisplay();
  }
}
