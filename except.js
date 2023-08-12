var productExceptSelf = function(nums) {
    // Get the length of the input array
    const n = nums.length;
    
    // Create an array to store the final result
    const result = new Array(n);
    
    // Initialize a variable to store the running product to the left of the current element
    let leftProduct = 1;
    
    // Loop through the array from left to right
    for (let i = 0; i < n; i++) {
        // Store the current left product in the result array
        result[i] = leftProduct;
        
        // Update the left product by multiplying with the current element
        leftProduct *= nums[i];
    }
    console.log(result)
    // Initialize a variable to store the running product to the right of the current element
    let rightProduct = 1;
    
    // Loop through the array from right to left
    for (let i = n - 1; i >= 0; i--) {
        // Multiply the current result value with the current right product and store it in the result array
        result[i] *= rightProduct;
        
        // Update the right product by multiplying with the current element
        rightProduct *= nums[i];
    }
    
    // Return the final result array
    return result;
};

// Call the function with an example input array
var cll = productExceptSelf([1, 2, 3, 4]);
console.log(cll); // Output: [24, 12, 8, 6]
