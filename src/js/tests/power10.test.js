import { beforeEach, describe, expect, test } from '@jest/globals';
import Power10Command from 'src/js/commands/power10';

describe('Power10Command', () => {
  let power10Command;

  beforeEach(() => {
    power10Command = new Power10Command();
  });

  test('should handle zero in performOperation', () => {
    const result = power10Command.performOperation(0);
    expect(result).toBe(1);
  });

  test('should calculate 10 to positive power in performOperation', () => {
    const result = power10Command.performOperation(2);
    expect(result).toBe(100);
  });

  test('should calculate 10 to negative power in performOperation', () => {
    const result = power10Command.performOperation(-2);
    expect(result).toBe(0.01);
  });
});
