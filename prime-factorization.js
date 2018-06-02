// enter a number and find all prime factors of that number.
// if not return the composite number.
// Define the rules


// Prime: 3 = 1 x 3.
// Composite: 6 = 1 x 6 and 6 = 2 x 3.

// 1 is not a prime nore a composite.

// What is a prime number?
// A prime number is only divisible by itself and 1.

// exponential notation of result

// 4 / 2
// 2
// if the number itself is reached stop the factorization.

function isArray(x) {
    return Object.prototype.toString.call(x) === '[object Array]'
}

function isPrime(n) {
 for (let i = 2; i < n; i++) {
     if (n % i === 0) {
         return false
     }
 }
  return n > 1
}

function printFactors(fs) {
    if (isArray(fs)) {
        if (fs.length === 1) {
            true
        } else {
            fs.join(' * ')
        }
    } 
}

function primeFactorization(n) {
    if (isPrime(n)) {
        return n
    }

    let factors = []

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          factors.push(i) 
        }
    }

    return factors
}

function tree(fs) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {

        }
    }
}

function toExponentialNotaion(fs) {
    if (isArray(fs)) {
        if (fs.length === 1) {
            return fs[0] + '²'
        }
    } else {
        return fs
    }
}

// factorize 
// primeFactorization(8) [2, 4] == 2 ^ 3
