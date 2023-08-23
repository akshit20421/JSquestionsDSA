var pivotIndex = function(nums) {
  var left=0;
  var total=0;
  for(let i=0;i<nums.length;i++){
    total=total + nums[i]
  }
  for(let i=0;i<nums.length;i++){
    total=total-nums[i];
    if(left==total){
      return i;
    }
    left+=nums[i]
  }
  return -1;
};

var cll = pivotIndex([1,7,3,6,5,6]);
console.log(cll)