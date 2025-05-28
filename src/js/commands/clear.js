export default class ClearCommand {
  static name = 'clear';

  execute(state) {
    state.currentInput = '';
    state.leftOperand = null;
    state.operator = null;
    state.updateDisplay();
  }
}
