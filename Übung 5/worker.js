let n = BigInt(1_000_000);
function isPrime(num) {
  for (let i = BigInt(2); i < num; i++) {
    if (num % i == 0) return false;
  }
  return num >= 2;
}
setInterval(function () {
  if (isPrime(n)) {
    self.postMessage(n);
  }
  n++;
}, 0);
