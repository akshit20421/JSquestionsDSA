var isPalindrome = function(s) {
    var reg= /[^a-zA-z0-9]/g;
    var rep = s.replace(reg,'');
    var ss = rep.toLowerCase();
  if(pal(ss)){
    return true
  }
  return false;
      };
var pal = (str) =>{
  var rev='';
  for(let i=str.length-1;i>=0;i--){
    rev=rev+str[i]
  }
  if(rev==str){
    return true
  }
  return false;
}

var cll = isPalindrome("A man, a plan, a canal: Panama");
console.log(cll)