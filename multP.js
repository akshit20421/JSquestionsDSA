function averagePair(arr,target){
  // add whatever parameters you deem necessary - good luck!
  let x=0;
  let y=arr.length-1;
  while(x<y){
      if((arr[x]+arr[y])/2==target){
          return true
      }
       if((arr[x]+arr[y])/2>target){
          y--;
      }
      else{
          x++;
      }
  }
  return false
}
var cll= averagePair([-1,0,3,4,5,6],4.1)
console.log(cll)