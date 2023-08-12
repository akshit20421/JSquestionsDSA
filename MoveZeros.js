var moveZeroes = function(nums) {
  var count=0;
   for(let i=0;i<nums.length;i++){
     if(nums[i]==0){
       count++;
       nums.splice(i,1)
     }
   }
  for(let j=0;j<count;j++){
    nums.push(0);
  }
  return nums
};

var cll = moveZeroes([0,1,0,3,12]);
console.log(cll)