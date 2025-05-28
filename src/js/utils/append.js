export function appendDigit(currentInput, digit) {
  if (digit === '.' && currentInput.includes('.')) return currentInput;
  if (digit === '0' && currentInput === '0') return currentInput;
  if (currentInput === '0' && /[1-9]/.test(digit)) return digit;
  return currentInput + digit;
}
