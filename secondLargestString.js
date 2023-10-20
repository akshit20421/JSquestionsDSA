var secondHighest = function(s) {
  let uniqueDigits = [];

  for (let i = 0; i < s.length; i++) {
    if (/[0-9]/.test(s[i])) {
      const digit = parseInt(s[i]);
      if (!uniqueDigits.includes(digit)) {
        uniqueDigits.push(digit);
      }
    }
  }

  uniqueDigits.sort((a, b) => b - a);

  if (uniqueDigits.length > 1) {
    return uniqueDigits[1];
  } else {
    return -1;
  }
};

var cll = secondHighest("dfa12321afd");
console.log(cll)