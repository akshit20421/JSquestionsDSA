var mostFrequentEven = function(nums) {
var max=0;
  var mostFrequent=0
let obj={};
for(let x of nums){
  if(x%2==0){
    obj[x]=(obj[x] || 0) +1;
  }
  if(obj[x]>max||obj[x]==max && obj[x]<mostFrequent){
    max=obj[x];
    mostFrequent=x;
  }
}
 return mostFrequent;
  
};
let cll = mostFrequentEven([0,1,2,2,4,4,1]);
console.log(cll)