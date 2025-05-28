import { beforeEach, describe, expect, test } from '@jest/globals';
import PowerCommand from 'src/js/commands/power';

describe('PowerCommand', () => {
  let powerCommand;

  beforeEach(() => {
    powerCommand = new PowerCommand();
  });

  test('should handle zero exponent in performOperation', () => {
    const result = powerCommand.performOperation(2, 0);
    expect(result).toBe(1);
  });

  test('should calculate power of positive numbers in performOperation', () => {
    const result = powerCommand.performOperation(2, 3);
    expect(result).toBe(8);
  });

  test('should handle negative exponent in performOperation', () => {
    const result = powerCommand.performOperation(2, -1);
    expect(result).toBe(0.5);
  });

  test('should handle zero base in performOperation', () => {
    const result = powerCommand.performOperation(0, 2);
    expect(result).toBe(0);
  });
});
