export default class MemoryClearCommand {
  static name = 'memoryClear';

  execute(state) {
    state.memory = 0;
    state.updateDisplay();
  }
}
