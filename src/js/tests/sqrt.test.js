import { beforeEach, describe, expect, test } from '@jest/globals';
import SqrtCommand from 'src/js/commands/sqrt';

describe('SqrtCommand', () => {
  let sqrtCommand;

  beforeEach(() => {
    sqrtCommand = new SqrtCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = sqrtCommand.performOperation(0);
    expect(result).toBe(0);
  });

  test('should calculate square root of positive number in performOperation', () => {
    const result = sqrtCommand.performOperation(16);
    expect(result).toBe(4);
  });

  test('should handle negative number in performOperation', () => {
    const result = sqrtCommand.performOperation(-16);
    expect(result).toBe('Ошибка');
  });
});
