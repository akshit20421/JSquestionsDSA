var reverseString = function(s) {
  
    for(let i=0;i<Math.floor(s.length)/2;i++){
      var temp = s[i];
      s[i]=s[(s.length-1-i)];
      s[(s.length-1-i)]=temp
    }
  return s;
  
};
var cll = reverseString(["h","e","l","l","o"]);
console.log(cll)