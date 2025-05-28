import BaseCommand from '../utils/baseCommand';

export default class Power10Command extends BaseCommand {
  static name = 'power10';

  performOperation(value) {
    return 10 ** value;
  }
}
