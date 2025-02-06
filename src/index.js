/** Calculates factorial with recursion
 * @param {Number} a - Number for which the factorial is calculated.
 * @returns {Number} Number to calculate factorial.
 */

const calcFactorial = (a) => {
  return a === 0 ? 1 : a * calcFactorial(a - 1);
};

console.log(calcFactorial(10)); // 3628800
