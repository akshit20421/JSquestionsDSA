var isMatch = function(s, p) {
  var regP=/^[a-z*.]+$/;
  var regS=/^[a-z]+$/;
  var spl1,spl2;
  if(regS.test(s)==true && regP.test(p)==true){
     spl1=s.split("");
     spl2=p.split("");
    for(let i=0;i<spl1.length;i++){
      for(let j=0;j<spl2.length;j++){
        if(spl1[i]!=spl2[j] && spl2[j]=="."){
          spl2[j]=spl1[i]
        }
        if( spl1[i]!=spl2[j] && spl2[j]=='*'){
          spl2[j]=spl2[j-1]
        }
        
      }
    }
  }
 if(spl1.join("")==spl2.join("")){
   return true
 }
  return false
};

var cll = isMatch("aa",".*");
console.log(cll)