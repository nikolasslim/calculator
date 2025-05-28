import { beforeEach, describe, expect, test } from '@jest/globals';
import SubtractCommand from 'src/js/commands/substract';

describe('SubtractCommand', () => {
  let subtractCommand;

  beforeEach(() => {
    subtractCommand = new SubtractCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = subtractCommand.performOperation(0, 0);
    expect(result).toBe(0); // 0 - 0 = 0
  });

  test('should subtract positive numbers in performOperation', () => {
    const result = subtractCommand.performOperation(5, 2);
    expect(result).toBe(3); // 5 - 2 = 3
  });

  test('should handle negative result in performOperation', () => {
    const result = subtractCommand.performOperation(2, 5);
    expect(result).toBe(-3); // 2 - 5 = -3
  });

});
