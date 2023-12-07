var decodeString = function(s) {
    var spl=s.split("")
    var reg1 = /[a-z]g/;
    var reg2 = /[0-9]g/;
    var arr1=[];
    var arr2=[];
  console.log(spl)
    for(let i=0;i<spl.length;i++){
        if(reg2.test(spl[i])==true){
            arr1.push(spl[i])
        }
    }
    for(let i=0;i<spl.length;i++){
        if(reg1.test(spl[i])==true){
            arr2.push(spl[i])
        }
    }
  console.log(arr1,arr2)
};

var cll = decodeString("3[a]2[bc]");
console.log(cll)