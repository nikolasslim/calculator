import { beforeEach, describe, expect, test } from '@jest/globals';
import InverseCommand from 'src/js/commands/inverse';

describe('InverseCommand', () => {
  let inverseCommand;

  beforeEach(() => {
    inverseCommand = new InverseCommand();
  });

  test('should handle non-zero in performOperation', () => {
    const result = inverseCommand.performOperation(2);
    expect(result).toBe(0.5);
  });

  test('should handle negative number in performOperation', () => {
    const result = inverseCommand.performOperation(-2);
    expect(result).toBe(-0.5);
  });

  test('should handle small number in performOperation', () => {
    const result = inverseCommand.performOperation(0.5);
    expect(result).toBe(2);
  });

  test('should return error for zero in performOperation', () => {
    const result = inverseCommand.performOperation(0);
    expect(result).toBe(Infinity);
  });
});
