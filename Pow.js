var myPow = function(x, n) {
  if (n === 0) return 1;

  if (n < 0) {
    x = 1 / x;
    n = -n;
  }

  if (n % 2 === 0) {
    const temp = myPow(x, n / 2);
    return temp * temp;
  } else {
    const temp = myPow(x, (n - 1) / 2);
    return x * temp * temp;
  }
};