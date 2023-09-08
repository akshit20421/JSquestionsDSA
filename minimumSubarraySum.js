var minSubArrayLen = function(target, nums) {
    var start=0;
    var end=0;
    var window=Infinity;
    var total=0;
   
    for(end = 0;end<nums.length;end++){
        total+=nums[end];
        while(total>=target){
            window=Math.min(window,end-start+1);
            total-=nums[start];
            start++
        }
    }
    return window==Infinity?0:window
    
};