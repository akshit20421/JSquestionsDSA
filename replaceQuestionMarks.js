var modifyString = function(s) {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let spl=s.split("");
    for(let i=0;i<spl.length;i++){
        if(spl[i]=="?"){
            for(let j=0;j<str.length;j++){
             if(str[j]!=spl[i+1] && str[j]!=spl[i-1]){
                 spl[i]=str[j]
                 break;
             }
        }
    }}
    return spl.join("")
};