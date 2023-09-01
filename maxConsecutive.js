var findMaxConsecutiveOnes = function(nums) {
    var x=0;
    var arr=[]
    var count=0;
    while(x<=nums.length){
        if(nums[x]==1){
            count++;
            x++;
        }
        else{
            arr.push(count);
            count=0;
            x++;
        }
    }
     arr.sort((a,b)=>a-b);
  return arr[arr.length-1]
};
var cll = findMaxConsecutiveOnes([1,1,0,1,1,1,1]);
console.log(cll)