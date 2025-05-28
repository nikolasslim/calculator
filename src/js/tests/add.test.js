import { beforeEach, describe, expect, test } from '@jest/globals';
import AddCommand from 'src/js/commands/add';

describe('AddCommand', () => {
  let addCommand;

  beforeEach(() => {
    addCommand = new AddCommand();
  });

  test('should perform addition operation', () => {
    const result = addCommand.performOperation(5, 2);
    expect(result).toBe(7);
  });

  test('should handle negative addend in performOperation', () => {
    const result = addCommand.performOperation(5, -3);
    expect(result).toBe(2);
  });

  test('should handle zero in performOperation', () => {
    const result = addCommand.performOperation(0, 0);
    expect(result).toBe(0);
  });
});
