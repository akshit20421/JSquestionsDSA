var largeGroupPositions = function(s) {
  var start=0;
  var result=[]
  for(let end =1;end<=s.length;end++){
    if(s[start]!==s[end] || s.length==end){
      if(end-start>=3){
        result.push([start,end-1])
      }
      start=end;
    }
  }
  return result
};


var cll= largeGroupPositions("abbmmmxxxxzyy");
console.log(cll)