var frequencySort = function(s) {
   
  var obj={}
  for(let x of s){
      obj[x]=(obj[x] || 0) + 1;
  }  
   let str = "";
  var arrAlpha = Object.keys(obj)
  arrAlpha.sort((a,b)=>obj[b]-obj[a])// frequency wise sorting
  for(let i=0;i<arrAlpha.length;i++){
    var char= arrAlpha[i]
    for(let i=0;i<obj[char];i++){
      str+=char
    }
  }
  return str
  
};

var cll = frequencySort("tree");
console.log(cll)