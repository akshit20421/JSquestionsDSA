var findComplement = function(num) {
    var bin=num.toString(2);
  var spl=bin.split("")
    for(let i=0;i<spl.length;i++){
      if(spl[i]==0)
      {spl[i]=1;}
      else if(spl[i]==1)
      {spl[i]=0;}
    }
  var joinn=spl.join("");
  var dig=parseInt(joinn,2);
  return dig
};
var cll = findComplement(5);
console.log(cll)