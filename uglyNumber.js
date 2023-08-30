var isUgly = function(n) {
    if (n <= 0) {
        return false;
    }

    let factors = [2, 3, 5];
    let point = 0;

    while (point < factors.length) {
        if (n % factors[point] === 0) {
            n /= factors[point];
        } else {
            point++;
        }
    }

    return n === 1;
};


var cll = isUgly(6);
console.log(cll)