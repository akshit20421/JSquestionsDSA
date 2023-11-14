var capitalizeTitle = function(title) {
 var spl=title.split(" ");
//either recursion or loops or map

spl=spl.map((x)=>{
  if(x.length>2){
  x=x.slice(0,1).toUpperCase()+x.slice(1).toLowerCase()
  return x}
  if(x.length<3){
    x=x.slice(0).toLowerCase()
    return x
  }
})
  return spl.join(" ")
}

let cll = capitalizeTitle("First leTTeR of EACH Word");
console.log(cll)