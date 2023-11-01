let fabon=function(n){
  if(n==1||n==0) return n;
  return fabon(n-1)+fabon(n-2)
}

let cll = fabon(10)
console.log(cll)

//0 1 1 2 3 5 8 13 21 34 55