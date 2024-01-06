var addBinary = function(a, b) {
    const bigA= `0b${a}`;
    const bigB= `0b${b}`;
    const sum = BigInt(bigA)+BigInt(bigB);
    return sum.toString(2)
};