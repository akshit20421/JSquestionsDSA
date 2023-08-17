var reverseStr = function(s, k) {
let spl = s.split("");
for(let i=0;i<spl.length;i+=2*k)
{
  let start = i;
  let end = Math.min(i+k-1,spl.length-1);
  reverseSubstring(spl, start, end);
}
  return spl.join('');
}
var reverseSubstring=(arr,start,end)=>{
   while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]; // Swap characters
        start++;
        end--;
    }
}

var cll = reverseStr("abcdefg",2);
console.log(cll)