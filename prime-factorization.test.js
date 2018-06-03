const primeFactorization = require('./prime-factorization')

describe('primeFactorization', () => {
  it('returns prime factors of a given number', () => {
      // arrange
      const inputA = 5
      const inputB = 12

      // act
      const a = primeFactorization(inputA)
      const b = primeFactorization(inputB)

      // assert
      expect(a).toEqual([5])
      expect(b).toEqual([2, 2, 3])
  })
})
