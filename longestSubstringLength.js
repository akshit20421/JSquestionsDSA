var lengthOfLongestSubstring = function(s) {
  let start=0;
    let maxLength=0;
    let charSet = new Set();
   for(let end=0;end<s.length;end++){
       let char = s.charAt(end);
       while(charSet.has(char)){
          charSet.delete(s.charAt(start))
           start++
       }
       charSet.add(char);
       var currLength= end-start+1;
       if(currLength>maxLength){
           maxLength=currLength;
       }
   }
    return maxLength
    
};