var removeDuplicateLetters = function(s) {
  var arr=[]
   s=s.toLowerCase();
  var spl = s.split("");
  for(let i=0;i<spl.length;i++){
    if(spl[i]!='a'){
      spl.splice(i,1)
      
    }
    else if(spl[i]=='a'){
      break;
    }
  }

 console.log(spl)
};

var cll = removeDuplicateLetters("bcabc");
console.log(cll)