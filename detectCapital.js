var detectCapitalUse = function(word) {
  if(word.toUpperCase()==word) return true
if(word.toLowerCase()==word) return true;
    for(let i=1;i<word.length;i++){
if(!(word[0].toUpperCase()==word[0] && word[i].toLowerCase()==word[i])){
   return false
   }}
    return true
};