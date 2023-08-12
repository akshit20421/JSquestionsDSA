const readline = require('readline');
let lSum, nums;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question('Write the length of array and the sum you want: ', (inp) => {
        lSum = inp.split(' ').map(Number);
        rl.question('Write the numbers you want to do the double sum operation: ', (inp) => {
            nums = inp.split(' ').map(Number);
            rl.close();
            twoSum(lSum, nums);
          console.log(lSum,nums)
        });
    });
}

function twoSum(lSum, nums) {
  
    var len = lSum[0];
    var sum = lSum[1];
    let x = 0;
    let y = nums.length - 1;
    while (x < y) {
        if (nums[x] + nums[y] === sum) {
            console.log([x, y]);
            return; // Add a return statement here to stop the loop once a pair is found.
        } else if (nums[x] + nums[y] < sum) {
            x++;
        } else {
            y--;
        }
    }
    console.log("No pair found!"); // Add a message if no pair is found.
}

main();
