function maxSubarraySum(arr,target){
  // add whatever parameters you deem necessary - good luck!
  if(arr.length<target) return null
  let maxSum=0;
  let temp=0
  for(let i=0;i<target.length;i++){
      maxSum=maxSum+arr[i]
  }
   temp = maxSum;
  for(let i=target ; i<arr.length ;i++){
      temp = (temp+arr[i])-arr[i-target];
      maxSum=Math.max(maxSum,temp);
  }
  return maxSum
}

var cll = maxSubarraySum([100,200,300,400], 2);
console.log(cll)