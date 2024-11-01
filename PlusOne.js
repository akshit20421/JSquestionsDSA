var plusOne = function(digits) {
   var n=0;
  var arr=[]
    for(let num of digits){
        n=n*10+num
    }
   var nn= n+1;
   var spl = nn.toString().split('');
   for(let s of spl){
     arr.push(Number(s))
   }
  return arr
};

var cll = plusOne([1,2,3])
console.log(cll)
