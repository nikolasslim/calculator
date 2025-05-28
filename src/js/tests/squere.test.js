import { beforeEach, describe, expect, test } from '@jest/globals';
import SquareCommand from 'src/js/commands/squere';

describe('SquareCommand', () => {
  let squareCommand;

  beforeEach(() => {
    squareCommand = new SquareCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = squareCommand.performOperation(0);
    expect(result).toBe(0);

    test('should square positive number in performOperation', () => {
      const result = squareCommand.performOperation(3);
      expect(result).toBe(9);
    });

    test('should square negative number in performOperation', () => {
      const result = squareCommand.performOperation(-3);
      expect(result).toBe(9);
    });
  });
