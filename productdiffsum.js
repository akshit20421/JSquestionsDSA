var subtractProductAndSum = function(n) {
    var sum=0;
  var prod=1;
    var str = n.toString();
    for(let i=0;i<str.length;i++){
        prod=prod*str[i]
    }
  
    for(let i=0;i<str.length;i++){
        sum=sum+parseInt(str[i])
    }
  
    var diff=prod-sum;
    return diff
};
var cll = subtractProductAndSum(234);
console.log(cll)
