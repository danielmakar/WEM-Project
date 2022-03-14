function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return num >= 2;
}

function getPrimes() {
  let counter = 0;
  for (let i = 1; i <= 100000; i++) {
    if(isPrime(i)) counter++;
  }
  return counter;
}