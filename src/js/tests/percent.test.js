import { beforeEach, describe, expect, jest, test } from '@jest/globals';
import PercentCommand from 'src/js/commands/percent';

describe('PercentCommand', () => {
  let percentCommand;
  let state;

  beforeEach(() => {
    percentCommand = new PercentCommand();
    state = {
      leftOperand: null,
      currentInput: '',
      operator: null,
      updateDisplay: jest.fn(),
    };
  });

  test('should calculate percentage of leftOperand', () => {
    state.leftOperand = 100;
    state.operator = '-';
    state.currentInput = '50';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('50');
    expect(state.updateDisplay).toHaveBeenCalled();
  });

  test('should handle zero percentage', () => {
    state.leftOperand = 200;
    state.operator = '+';
    state.currentInput = '0';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('0');
    expect(state.updateDisplay).toHaveBeenCalled();
  });

  test('should handle negative percentage', () => {
    state.leftOperand = 100;
    state.operator = '+';
    state.currentInput = '-25';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('-25');
    expect(state.updateDisplay).toHaveBeenCalled();
  });

  test('should handle zero leftOperand', () => {
    state.leftOperand = 0;
    state.operator = '*';
    state.currentInput = '50';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('0');
    expect(state.updateDisplay).toHaveBeenCalled();
  });

  test('should do nothing when leftOperand is null', () => {
    state.leftOperand = null;
    state.operator = '-';
    state.currentInput = '50';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('50');
    expect(state.updateDisplay).not.toHaveBeenCalled();
  });



  test('should handle decimal numbers', () => {
    state.leftOperand = 150.5;
    state.operator = '+';
    state.currentInput = '20.5';
    percentCommand.execute(state);
    expect(state.currentInput).toBe('30.8525');
    expect(state.updateDisplay).toHaveBeenCalled();
  });
});
