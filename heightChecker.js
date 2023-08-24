var heightChecker = function(heights) {
    var srt=[...heights].sort((a,b)=>a-b);
    var point=0;
    var count=0;
    for(let x of heights){
        if(x!==srt[point]){
            count++;
        }
        point++
    }
    return count
};

var cll = heightChecker([5,1,2,3,4]);
console.log(cll)

// Both `var sort = arr.sort()` and `var sort = [...arr].sort()` involve sorting an array, but they have different implications based on whether you want to modify the original array or create a sorted copy while preserving the original array.

// 1. **Modifying the Original Array with `sort()`:**
//    ```javascript
//    var arr = [3, 1, 2];
//    var sortedArr = arr.sort();
//    console.log(sortedArr); // Output: [1, 2, 3]
//    console.log(arr); // Output: [1, 2, 3] (original array modified)
//    ```
//    Here, the `sort()` method modifies the original array `arr` in place. After calling `sort()`, both `arr` and `sortedArr` will have the sorted order.

// 2. **Creating a Sorted Copy with `([...arr]).sort()`:**
//    ```javascript
//    var arr = [3, 1, 2];
//    var sortedArr = ([...arr]).sort();
//    console.log(sortedArr); // Output: [1, 2, 3]
//    console.log(arr); // Output: [3, 1, 2] (original array not modified)
//    ```
//    In this case, the spread operator `[...arr]` creates a shallow copy of the array. The `sort()` method is then called on the copied array, leaving the original array `arr` unchanged.

// Which approach to use depends on your specific use case:

// - If you want to sort the original array and don't need the original order preserved, you can use `arr.sort()` directly.
// - If you want to keep the original array unchanged and work with a sorted copy, you should use `([...arr]).sort()`.

// Always consider the context of your code and whether you need to maintain the original array's order or not before deciding which approach to use.