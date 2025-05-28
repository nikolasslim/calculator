import BinaryBaseCommand from '../utils/binaryBaseCommand';

export default class RootCommand extends BinaryBaseCommand {
  static name = 'root';
  static operator = 'root';

  performOperation(left, right) {
    if (right === 0) return 'Ошибка';
    if (left < 0 && right % 2 === 0) return 'Ошибка';
    if (left === 0) return 0;
    if (right === 1) return left;

    const isNegative = left < 0;
    const absLeft = isNegative ? -left : left;

    let x = absLeft > 1 ? absLeft / right : 1;

    const maxIterations = 100;
    const epsilon = 1e-12;

    for (let i = 0; i < maxIterations; i++) {
      let xPowerMinus1 = 1;
      for (let j = 0; j < right - 1; j++) {
        xPowerMinus1 *= x;
      }

      const xPower = x * xPowerMinus1;
      const fx = xPower - absLeft;
      const dfx = right * xPowerMinus1;
      if (dfx === 0) return 'Ошибка';
      const nextX = x - fx / dfx;

      if (this.absoluteValue(nextX - x) < epsilon) {
        return isNegative ? -nextX : nextX;
      }

      x = nextX;

      if (!this.isFinite(x) || this.isNaN(x)) {
        return 'Ошибка';
      }
    }

    return isNegative ? -x : x;
  }

  absoluteValue(num) {
    return num < 0 ? -num : num;
  }

  isFinite(num) {
    return typeof num === 'number' && num !== Infinity && num !== -Infinity;
  }

  isNaN(num) {
    return num !== num;
  }
}
