var hammingDistance = function(x, y) {
  var count=0
    x=x.toString(2).split("");
    y=y.toString(2).split("");
  console.log(x,y)
 while(x.length<y.length) x.unshift('0');
   while(x.length>y.length) y.unshift('0');
  for(let i=0;i<x.length;i++){
    if(x[i]!=y[i]) count++
  }
  return count
};

var cll = hammingDistance(1,4);
console.log(cll)