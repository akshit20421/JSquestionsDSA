var reverseWords = function(s) {
  // Split the input string into words by spaces
  let words = s.split(" ");

  // Filter out any empty words (caused by extra spaces)
  words = words.filter(word => word !== "");

  // Reverse the order of the words and join them with spaces
  let reversedString = words.reverse().join(" ");

  return reversedString;
};

var cll = reverseWords("  hello  world  ");
console.log(cll)