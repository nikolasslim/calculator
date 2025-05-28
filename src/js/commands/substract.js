import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class SubtractCommand extends BinaryBaseCommand {
  static name = 'subtract';

  performOperation(leftOperand, rightOperand) {
    return leftOperand - rightOperand;
  }
}
