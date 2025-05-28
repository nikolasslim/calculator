import { CommandInvoker } from 'src/js/service/commandInvoker';

export function createMockState() {
  const state = {
    currentInput: '',
    leftOperand: null,
    operator: null,
    pendingFunction: '',
    display: { value: '' },
    invoker: new CommandInvoker(),
    updateDisplay: jest.fn(() => {
      state.display.value = state.currentInput;
    }),
  };
  return state;
}

export function mockParseInput() {
  return jest.fn((input) => parseFloat(input) || 0);
}
