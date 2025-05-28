import BaseCommand from '../utils/baseCommand';

export default class SquareCommand extends BaseCommand {
  static name = 'square';

  performOperation(value) {
    return value ** 2;
  }
}
