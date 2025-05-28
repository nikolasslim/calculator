import BaseCommand from '../utils/baseCommand';

export default class NegateCommand extends BaseCommand {
  static name = 'negate';

  performOperation(value) {
    if (value === 0) return 0;
    return -value;
  }
}
