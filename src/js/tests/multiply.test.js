import { beforeEach, describe, expect, test } from '@jest/globals';
import MultiplyCommand from 'src/js/commands/multiply';

describe('MultiplyCommand', () => {
  let multiplyCommand;

  beforeEach(() => {
    multiplyCommand = new MultiplyCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = multiplyCommand.performOperation(10, 0);
    expect(result).toBe(0);
  });

  test('should multiply positive numbers in performOperation', () => {
    const result = multiplyCommand.performOperation(10, 2);
    expect(result).toBe(20);
  });

  test('should multiply negative numbers in performOperation', () => {
    const result = multiplyCommand.performOperation(-5, 3);
    expect(result).toBe(-15)
  });

});
