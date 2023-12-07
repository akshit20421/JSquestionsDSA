var reverseOnlyLetters = function(s) {
    var spl = s.split("");
    var reg = /[A-Za-z]/;
    var left = 0;
    var right = spl.length - 1;

    while (left < right) {
        // Find the first English letter from the left
        while (left < right && !reg.test(spl[left])) {
            left++;
        }

        // Find the first English letter from the right
        while (left < right && !reg.test(spl[right])) {
            right--;
        }

        // Swap the English letters
        [spl[left], spl[right]] = [spl[right], spl[left]];

        // Move the pointers
        left++;
        right--;
    }

    return spl.join("");
};