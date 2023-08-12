var strStr = function(haystack, needle) {
    for(let i = 0; i < haystack.length-1;i++){
      if(haystack[i]==needle[0]){
          var subst = haystack.substring(i,i+needle.length);
       
          if(subst==needle){
            return i;
          }
          else{
            i++;
          }
        }
      else if(haystack[i]!=needle[0]){
        i++;
      }
    }
  
};
var cll = strStr("dsambutsad","sam");
console.log(cll)