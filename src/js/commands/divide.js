import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class DivideCommand extends BinaryBaseCommand {
  static name = 'divide';

  performOperation(leftOperand, rightOperand) {
    if (rightOperand === 0) {
      return 'Ошибка';
    }
    return leftOperand / rightOperand;
  }
}
