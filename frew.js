var areOccurrencesEqual = function(s) {
    var arr=[]
    var spl= s.split("");
    let obj={};
    for(let val of spl){
        obj[val]=(obj[val] || 0) +1;
    }
    for(let key in obj){
         arr.push(obj[key]);
       }
  console.log(arr)
    var p1=0;
    var p2=arr.length-1;
    while(p1<p2){
        if(arr[p1]!==arr[p2]){
            return false
        }
    else{
      p2--;
    }}
    return true;
};
let cll=areOccurrencesEqual('aaabbb');
console.log(cll)