var dayOfTheWeek = function(day, month, year) {
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var d=new Date(`${month},${day},${year}`);
     console.log(d)
     var day=d.getDay();
  console.log(day)
     return days[day]
};

var cll = dayOfTheWeek(31,8,2019);
console.log(cll)