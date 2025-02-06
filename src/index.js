/** Calculates factorial with recursion
 * @param {Number} a - Number for which the factorial is calculated.
 * @returns {Number} Number to calculate factorial.
 */

function calcFactorialWithCheck(a) {
  if (!Number.isInteger(a)) {
    return "Not a number.";
  }
  if (a < 0) {
    return "The factorial for negative numbers is not defined.";
  }
  const calcFactorial = (a) => {
    return a === 0 ? 1 : a * calcFactorial(a - 1);
  };
  return calcFactorial(a);
}

console.log(calcFactorialWithCheck(10)); // 3628800
console.log(calcFactorialWithCheck("Test")); // Not a number.
console.log(calcFactorialWithCheck(-10)); // The factorial for negative numbers is not defined.
