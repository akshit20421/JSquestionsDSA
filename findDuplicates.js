var findDuplicates = (nums) => {
  var obj={};
  for(let x of nums){
    obj[x]=(obj[x] || 0) + 1;
  }
  for(let key in obj){
    if(obj[key]>1){
      console.log(`${key} is getting repeated.`)
    }
  }
}

var cll = findDuplicates([1, 2, 3, 6, 3, 6, 1]);
console.log(cll)