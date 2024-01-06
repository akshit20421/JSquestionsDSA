var partitionString = function(s) {
    var arr = []
  var str = "";
    for(var i=0;i<s.length;i++){
        
        if(str.includes(s[i])){
          arr.push(str)
          i--
          str=""
        }
        else{
            str+=s[i]
        }
    }
  arr.push(str)
  return arr.length
};

var cll = partitionString("ssssss");
console.log(cll)