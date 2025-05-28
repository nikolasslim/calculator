export default function clearState(state) {
  return {
    ...state,
    currentInput: '',
    leftOperand: null,
    operator: null,
    memory: 0,
  };
}
