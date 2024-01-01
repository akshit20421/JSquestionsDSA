var numIdenticalPairs = function(nums) {
    var arr = [];
    
    for(let i=0;i<nums.length;i++){
     for(let j=i+1;j<nums.length;j++){
       if(nums[i]==nums[j]){
         arr.push([i,j])
       }
     }
    }
    return arr.length
};

var cll = numIdenticalPairs([1,2,3,1,1,3]);
console.log(cll)