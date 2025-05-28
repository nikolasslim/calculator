export default class PercentCommand {
  static name = 'percent';

  execute(state) {
    if (state.leftOperand !== null && state.operator) {
      const rightOperand = parseFloat(state.currentInput);
      const percentValue = state.leftOperand * (rightOperand / 100);
      state.currentInput = percentValue.toString();
      state.updateDisplay();
    }
  }
}
