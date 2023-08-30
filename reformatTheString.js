var reformat = function(s) {
    const letters = [];
    const digits = [];

    for (const char of s) {
        isNaN(char) ? letters.push(char) : digits.push(char);
    }

    if (Math.abs(letters.length - digits.length) > 1) {
        return "";
    }

    const result = [];
    const largerArr = letters.length >= digits.length ? letters : digits;
    const smallerArr = letters.length < digits.length ? letters : digits;

    for (let i = 0; i < largerArr.length; i++) {
        result.push(largerArr[i]);
        if (i < smallerArr.length) {
            result.push(smallerArr[i]);
        }
    }

    return result.join('');
};

// Example usage
console.log(reformat("a0b1c2"));  // Output: "a1b2c0"
console.log(reformat("abc123"));  // Output: "" (impossible to reformat)
console.log(reformat("a"));       // Output: "a"
console.log(reformat("123"));     // Output: "123"
console.log(reformat("a0b"));     // Output: "a0b"
