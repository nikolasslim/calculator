import { beforeEach, describe, expect, test } from '@jest/globals';
import RootCommand from 'src/js/commands/root';

describe('RootCommand', () => {
  let rootCommand;

  beforeEach(() => {
    rootCommand = new RootCommand();
  });

  test('should handle zero base in performOperation', () => {
    const result = rootCommand.performOperation(0, 3);
    expect(result).toBe(0);
  });

  test('should calculate root of positive number in performOperation', () => {
    const result = rootCommand.performOperation(8, 3);
    expect(result).toBeCloseTo(2, 5);
  });

  test('should handle zero root in performOperation', () => {
    const result = rootCommand.performOperation(8, 0);
    expect(result).toBe('Ошибка');
  });

  test('should handle even root of negative number in performOperation', () => {
    const result = rootCommand.performOperation(-16, 2);
    expect(result).toBe('Ошибка');
  });
});
