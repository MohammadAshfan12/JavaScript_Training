console.log('h')
var hourHand = document.getElementById('hr');
var minuteHand = document.getElementById('min')
var secondsHand = document.getElementById('sec')

function setClock() {
    
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes() 
    console.log(minute)
    var seconds = date.getSeconds();

    var hourDeg = (hour * 30) + (0.5 * minute);
    var minDeg = (minute * 6) + (0.1 * seconds);
    var secDeg = seconds * 6;

    hourHand.style.transform = 'rotate('+ hourDeg + 'deg)';
    minuteHand.style.transform = 'rotate('+ minDeg + 'deg)';
    secondsHand.style.transform = 'rotate('+ secDeg + 'deg)';
    setTimeout(setClock, 1000);
};

setClock();
