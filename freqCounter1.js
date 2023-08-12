var sameFrequency = function(n1,n2) {
let str1=n1.toString();
let str2=n2.toString();
var obj1={},obj2={};
  if(str1.length!==str2.length) return false;
for(let n of str1){
  obj1[n]=(obj1[n] || 0) +1;
}
for(let m of str2){
  obj2[m]= (obj2[m]||0) +1;
}
for(let key in obj1){
  if(!(key in obj2) || obj1[key]!==obj2[key]){
    return false
  }
}
  return true
};
var cll=sameFrequency(181,281);
console.log(cll)