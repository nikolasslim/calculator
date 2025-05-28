import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class MultiplyCommand extends BinaryBaseCommand {
  static name = 'multiply';

  performOperation(leftOperand, rightOperand) {
    return leftOperand * rightOperand;
  }
}
