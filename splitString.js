var balancedStringSplit = function(s) {
  var count = 0; // Initialize a count to keep track of balanced substrings
  var balance = 0; // Initialize a balance variable to keep track of 'L' and 'R' characters

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === 'L') {
      balance++; // Increment balance for 'L' character
    } else if (s.charAt(i) === 'R') {
      balance--; // Decrement balance for 'R' character
    }

    // If balance becomes zero, it means we've found a balanced substring
    if (balance === 0) {
      count++; // Increment the count of balanced substrings
    }
  }

  return count;
};
