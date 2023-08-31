var averageValue = function(nums) {
    var p=0;
    var sum=0
    var count=0;
    while(p<nums.length){
        if(nums[p]%3==0 && nums[p]%2==0 && nums[p]>0){
            sum=sum+nums[p];
            count++;
            p++;
        }
        else{p++;}
    }
    if(count>0){
    var av=Math.floor(sum/count);
    return av}
    return 0
};