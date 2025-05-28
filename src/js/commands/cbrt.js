import BaseCommand from '../utils/baseCommand';

export default class CbrtCommand extends BaseCommand {
  static name = 'cbrt';

  performOperation(value) {
    if (value === 0) {
      return 0;
    }
    let guess = value / 3;
    for (let i = 0; i < 10; i++) {
      guess = (2 * guess + value / (guess * guess)) / 3;
    }
    return guess;
  }
}
