import { beforeEach, describe, expect, test } from '@jest/globals';
import DivideCommand from 'src/js/commands/divide';

describe('DivideCommand', () => {
  let divideCommand;

  beforeEach(() => {
    divideCommand = new DivideCommand();
  });

  test('should perform division operation', () => {
    const result = divideCommand.performOperation(10, 2);
    expect(result).toBe(5);
  });

  test('should handle negative divisor in performOperation', () => {
    const result = divideCommand.performOperation(10, -2);
    expect(result).toBe(-5);
  });

  test('should handle division by zero in performOperation', () => {
    const result = divideCommand.performOperation(10, 0);
    expect(result).toBe('Ошибка');
  });
});
