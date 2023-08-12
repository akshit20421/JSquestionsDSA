var count = (arr) =>{
  var i=0;
  for(let j=1;j<arr.length;j++){
  if(arr[i]!==arr[j]){
    i++;
    arr[i]=arr[j]
    }
  }
  console.log(arr)
  return i+1;
}

var cll = count([1])
console.log(cll)