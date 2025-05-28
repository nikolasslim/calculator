import { beforeEach, describe, expect, test } from '@jest/globals';
import CubeCommand from 'src/js/commands/cube';

describe('CubeCommand', () => {
  let cubeCommand;

  beforeEach(() => {
    cubeCommand = new CubeCommand();
  });

  test('should handle zero in performOperation', () => {
    const result = cubeCommand.performOperation(0);
    expect(result).toBe(0);
  });

  test('should calculate cube of positive number', () => {
    const result = cubeCommand.performOperation(2);
    expect(result).toBe(8);
  });

  test('should calculate cube of negative number', () => {
    const result = cubeCommand.performOperation(-2);
    expect(result).toBe(-8);
  });

  test('should calculate cube of fractional number', () => {
    const result = cubeCommand.performOperation(0.5);
    expect(result).toBe(0.125);
  });
});
