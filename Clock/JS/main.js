var hourHand = document.getElementById('hr');
var minuteHand = document.getElementById('min')
var secondsHand = document.getElementById('sec')
var minuteArray = [];

function setClock(wait){
    var date = new Date();
    var hour = date.getHours() % 12;
    var minute = date.getMinutes()
    var seconds = date.getSeconds();
    var hourDeg = (hour * 30) + (0.5 * minute);
    var minDeg = (minute * 6) + (0.1 * seconds)
    var secDeg = seconds * 6;
    setTimeout(second,wait);

    function second(){
        if(minuteArray.includes(minute)){
            secondsHand.style.transform = 'rotate(' + secDeg + 'deg)';
        }
        else{
            secondsHand.style.transform = 'rotate(' + secDeg + 'deg)';
            minuteHand.style.transform = 'rotate(' + minDeg + 'deg)';
            hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
            minuteArray = []
            minuteArray.push(minute);
        }  
        setClock(wait)
    } 
}

setClock(1000);



