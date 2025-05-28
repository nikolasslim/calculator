import BaseCommand from '../utils/baseCommand';

export default class FactorialCommand extends BaseCommand {
  static name = 'factorial';

  performOperation(value) {
    if (value < 0 || !Number.isInteger(value)) {
      return 'Error';
    }
    let result = 1;
    for (let i = 2; i <= value; i++) {
      result *= i;
    }
    return result;
  }
}
