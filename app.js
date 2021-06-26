//Initialize Some VAraiables
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");




var today = new Date()
var eid = new Date("21 july, 2021")
var gap = eid - today

// var dy= Math.floor(diff/(1000*60*60*24))

//countDown function
function eidUlAdha() {
    var sec = 1000;
    var min = sec * 60;
    var hr = min * 60;
    var dy = hr * 24;

     var countDown = new Date ( '21 july, 2021, ').getTime();
     var today = new Date().getTime();
     var gap = countDown - today;


    var d = Math.floor(gap / (dy));
    var h = Math.floor(gap % (dy) / (hr));
    var m = Math.floor(gap % (hr) / (min));
    var s = Math.floor(gap % (min) / (sec));

    day.innerHTML = d;
    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

        setInterval(function(){
            eidUlAdha();        
         }     , 1000)
