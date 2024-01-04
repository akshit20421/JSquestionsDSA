var isPrime = function(n){
    if(n<2)return false
for(let i=2;i<=Math.sqrt(n);i++){
    if(n%i==0){
        return false
    }
}
return true    
}

var closestPrimes = function(left, right) {

var arr = [];
while(left<=right){
    if(isPrime(left)){
        arr.push(left)
    }
    left++;
}   
  if (arr.length < 2) {
        return [-1, -1];
    }
  var minDiff=Infinity
  var result=[]
  for(let i=0;i<arr.length;i++){
      var diff = arr[i+1]-arr[i];
      if(diff<minDiff){
          minDiff=diff
          result = [arr[i], arr[i + 1]];
      }

  }  
    return result

};
