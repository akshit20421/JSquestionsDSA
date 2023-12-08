var rotate = function(nums, k) {
  k=%n
const n= nums.length;
rev(nums,0,n-1);
rev(nums,0,k-1);
rev(nums,k,n-1);
  return nums
};
function rev(nums,start,end){
  var x=start;
  var y=end;
  while(x<y){
    var temp=nums[y];
    nums[y]=nums[x];
    nums[x]=temp
    x++;
    y--
  }
}

var cll = rotate([1,2,3,4,5,6,7],3);
console.log(cll)