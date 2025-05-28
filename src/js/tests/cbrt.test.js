import { beforeEach, describe, expect, test } from '@jest/globals';
import CbrtCommand from 'src/js/commands/cbrt';

describe('CbrtCommand', () => {
  let cbrtCommand;

  beforeEach(() => {
    cbrtCommand = new CbrtCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = cbrtCommand.performOperation(0);
    expect(result).toBe(0);
  });

  test('should calculate cube root of positive number', () => {
    const result = cbrtCommand.performOperation(8);
    expect(result).toBeCloseTo(2, 5);
  });

  test('should calculate cube root of negative number', () => {
    const result = cbrtCommand.performOperation(-8);
    expect(result).toBeCloseTo(-2, 5);
  });

  test('should calculate cube root of non-perfect cube', () => {
    const result = cbrtCommand.performOperation(10);
    expect(result).toBeCloseTo(Math.cbrt(10), 5);
  });
});
