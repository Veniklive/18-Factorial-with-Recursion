/** Calculates factorial with recursion
 * @param {Number} a - Number for which the factorial is calculated.
 * @returns {Number} Number to calculate factorial.
 */

function calcFactorial(a) {
  if (a === 0) {
    return 1;
  }
  return a * calcFactorial(a - 1);
}

console.log(calcFactorial(10));
