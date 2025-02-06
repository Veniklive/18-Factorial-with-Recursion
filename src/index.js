/** Calculates factorial with recursionы
 * @returns {Number} Calculated factorial.
 */

function calcFactorial(a, i = 1, factorial = 1) {
  if (i !== a) {
    i++;
    factorial *= i;
    return calcFactorial(a, i, factorial);
  }
  return factorial;
}

console.log(calcFactorial(10));
