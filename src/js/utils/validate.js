export function isValidNumber(value) {
  if (value === '') return false;
  return !isNaN(parseFloat(value)) && isFinite(parseFloat(value));
}
