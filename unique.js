var uniqueOccurrences = function(arr) {
  var obj1 = {};

  // Count occurrences of each value in the array and store in obj1
  for (let val of arr) {
    obj1[val] = (obj1[val] || 0) + 1;
  }

  var occurrenceSet = new Set();

  // Check if occurrences are unique using a set
  for (let key in obj1) {
    if (occurrenceSet.has(obj1[key])) {
      return false; // If a non-unique occurrence is found, return false
    } else {
      occurrenceSet.add(obj1[key]); // Add the occurrence to the set
    }
  }
console.log(occurrenceSet)
  return true; // If all occurrences are unique, return true
};


var cll = uniqueOccurrences([1,2,2,1,3]);
console.log(cll)