import BaseCommand from '../utils/baseCommand';

export default class CubeCommand extends BaseCommand {
  static name = 'cube';

  performOperation(value) {
    return value ** 3;
  }
}
