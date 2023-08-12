var thirdMax = function(nums) {
    nums.sort((a,b)=>b-a)
  var set= new Set();
  for(let i=0;i<nums.length;i++){
      set.add(nums[i])
  }
var arr= [...set];
  if(arr.length<3){
    return arr[0]
  }
  
    
};
var cll = thirdMax([1,2,2,5,3,5]);
console.log(cll)