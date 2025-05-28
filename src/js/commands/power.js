import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class PowerCommand extends BinaryBaseCommand {
  static name = 'power';

  performOperation(leftOperand, rightOperand) {
    return leftOperand ** rightOperand;
  }
}
