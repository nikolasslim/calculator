import FactorialCommand from 'src/js/commands/factorial';
import { beforeEach, describe, expect, test } from '@jest/globals';

describe('FactorialCommand', () => {
  let factorialCommand;

  beforeEach(() => {
    factorialCommand = new FactorialCommand();
  });

  test('should calculate factorial of zero', () => {
    const result = factorialCommand.performOperation(0);
    expect(result).toBe(1);
  });

  test('should calculate factorial of positive integer', () => {
    const result = factorialCommand.performOperation(5);
    expect(result).toBe(120);
  });

  test('should handle negative number', () => {
    const result = factorialCommand.performOperation(-5);
    expect(result).toBe('Error');
  });
});
