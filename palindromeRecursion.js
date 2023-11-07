var pal=(str)=>{
  if(str.length==2) return str[0]==str[1] 
   if(str.length==1) return true
if(str[0]==str.slice(-1))return pal(str.slice(1,-1));
}
var cll = pal("cosoc");
console.log(cll)