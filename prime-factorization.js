/**
 * Return prime factor(s) of a given number
 * @param {Number} n Number to factorize.
 * @returns {Array} Array of prime factor(s).
 */
function primeFactorization(n) {
  let factors = []

  while (n % 2 === 0) {
      n /= 2
      factors.push(2)
  }

  while (n % 3 === 0) {
      n /= 3
      factors.push(3)
  }

  if (n > 2) {
      factors.push(n)
  }

  return factors
}

module.exports = primeFactorization
