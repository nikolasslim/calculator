import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class AddCommand extends BinaryBaseCommand {
  static name = 'add';

  performOperation(leftOperand, rightOperand) {
    return leftOperand + rightOperand;
  }
}
