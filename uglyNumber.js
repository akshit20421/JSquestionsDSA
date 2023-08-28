var isUgly = function(n) {
let arr = [2,3,5];
let point=0;
  if(n<0) return false
while(point<=arr.length-1){
  if(n%arr[point]==0){
    let div = n/arr[point]
  if(div==arr[point]){
    return true
    break
  }
    else{
      point++;
    }
  }
}
return false

};

var cll = isUgly(6);
console.log(cll)