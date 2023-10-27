const fact = (n)=>{
  if(n==1) return 1;
return (n*fact(n-1))
}
var cll = fact(5);
console.log(cll)