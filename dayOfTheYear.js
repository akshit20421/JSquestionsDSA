var dayOfYear = function(date) {
if(date.length==10){
  var spl = date.split("-");
  var year=Number(spl[0]);
  var month=Number(spl[1]);
  var day=Number(spl[2])

  var monthsDays=[31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
    arr[1]=29;
  }
  var currDay=day;
  for(let i=0;i<month-1;i++){
    currDay+=monthsDays[i]
  }
return currDay
  
}

}
var cll= dayOfYear("2019-01-09");
console.log(cll)