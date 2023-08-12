var areThereDuplicates=(...args)=>{
  var obj={};
  for(let val of args){
    obj[val]=(obj[val] || 0) +1;
  }
  for(let key in obj){
    if(obj[key]>1){
      return true
    }
  }
  return false
}

var cll = areThereDuplicates('a','b','c','a');
console.log(cll)