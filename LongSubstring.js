function isSubsequence(str1,str2) {
  // good luck. Add any arguments you deem necessary.
  var point1 = 0;
  var point2 = 0;
  var finStr=''
  while(point2<=str2.length-1){
      if(str1[point1]==str2[point2]){
          finStr=finStr+str2[point2];
          point1++;
          point2++;
      }
      else if(str1[point1]!==str2[point2]){
          point2++;
      }
  }
  if(finStr==str1){
    return true
  }
  return false;
}

var cll = isSubsequence('sing', 'sting');
console.log(cll)