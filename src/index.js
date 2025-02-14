/** Calculates factorial with recursion
 * @param {Number} a - Number for which the factorial is calculated.
 * @returns {Number} Number to calculate factorial.
 */

function calcFactorial(a) {
  if (!Number.isInteger(a)) return "Not a number.";
  if (a < 0) return "The factorial for negative numbers is not defined.";
  return a === 0 ? 1 : a * calcFactorial(a - 1);
}

console.log(calcFactorial(10)); // 3628800
console.log(calcFactorial("Test")); // Not a number.
console.log(calcFactorial(-10)); // The factorial for negative numbers is not defined.
