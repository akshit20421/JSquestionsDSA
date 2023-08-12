var distinctAverages = function(nums) {
    nums.sort((a, b) => a - b); // Sort the array in ascending order
    
    let left = 0;
    let right = nums.length - 1;
    let distinctAveragesSet = new Set();
    
    while (left < right) {
        let average = (nums[left] + nums[right]) / 2;
      console.log(average)
        distinctAveragesSet.add(average);
        left++;
        right--;
    }
    console.log(distinctAveragesSet)
    return distinctAveragesSet.size;
};

// Test the function
var cll = distinctAverages([4, 1, 4, 0, 3, 5]); // [0,1,3,4,4,5];
console.log(cll); // Output should be 3
