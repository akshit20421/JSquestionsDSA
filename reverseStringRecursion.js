var strRev = (str) => {
 //base case 
  if(str.length<1){
    return str
  }
  return strRev(str.slice(1))+str[0]
}
var cll = strRev("Hello");
console.log(cll)