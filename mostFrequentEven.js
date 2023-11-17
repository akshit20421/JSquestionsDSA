var mostFrequentEven = function(nums) {
    let countMap = {};
    let maxCount = 0;
    let mostFrequentEvenNum = -1;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (countMap[nums[i]] === undefined) {
                countMap[nums[i]] = 1;
            } else {
                countMap[nums[i]]++;
            }

            if (countMap[nums[i]] > maxCount || (countMap[nums[i]] === maxCount && nums[i] < mostFrequentEvenNum)) {
                maxCount = countMap[nums[i]];
                mostFrequentEvenNum = nums[i];
            }
        }
    }

    return mostFrequentEvenNum;
};
let cll = mostFrequentEven([0,1,2,2,4,4,1]);
console.log(cll)