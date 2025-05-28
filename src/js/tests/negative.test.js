import { beforeEach, describe, expect, test } from '@jest/globals';
import NegateCommand from 'src/js/commands/negative';

describe('NegateCommand', () => {
  let negateCommand;

  beforeEach(() => {
    negateCommand = new NegateCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = negateCommand.performOperation(0);
    expect(result).toEqual(0);
  });

  test('should negate positive number in performOperation', () => {
    const result = negateCommand.performOperation(5);
    expect(result).toBe(-5);
  });

  test('should negate negative number in performOperation', () => {
    const result = negateCommand.performOperation(-5);
    expect(result).toBe(5);
  });
});
