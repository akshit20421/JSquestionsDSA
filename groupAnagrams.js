var groupAnagrams = function(strs) {
var obj={};
strs.forEach(str=>{
  const sorted = str.split("").sort().join("");
  obj[sorted]?obj[sorted].push(str):obj[sorted]=[str]
})
return Object.values(obj)

};
var cll = groupAnagrams(["eat","tea","tan","ate","nat","bat"])
console.log(cll)