import BaseCommand from '../utils/baseCommand';

export default class SqrtCommand extends BaseCommand {
  static name = 'sqrt';

  performOperation(value) {
    if (value < 0) {
      return 'Ошибка';
    }
    if (value === 0) {
      return 0;
    }
    let guess = value / 2;
    for (let i = 0; i < 10; i++) {
      guess = (guess + value / guess) / 2;
    }
    return guess;
  }
}
