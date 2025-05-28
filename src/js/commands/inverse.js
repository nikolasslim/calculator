import BaseCommand from '../utils/baseCommand';

export default class InverseCommand extends BaseCommand {
  static name = 'inverse';

  performOperation(value) {
    return 1 / value;
  }
}
