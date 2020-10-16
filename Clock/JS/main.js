var hourHand = document.getElementById('hr');
var minuteHand = document.getElementById('min')
var secondsHand = document.getElementById('sec')
var arr = [];
var arr2 = [];
var flag = false;
var hour;
var minute;
var seconds;

function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function changeTime() {
    flag = true;
    hour = document.getElementById('hor').value;
    minute = document.getElementById('mon').value;
    seconds = 0;
}

function setClock(wait) {
    var date = new Date();
    if (flag === false) {
        hour = date.getHours() % 12;
        minute = date.getMinutes()
    }
    seconds = date.getSeconds();
    if ((seconds === 0) && (flag === true)) {
        minute++;
    }
    var hourDeg = (hour * 30) + (0.5 * minute);
    var minDeg = (minute * 6) + (0.1 * seconds)
    var secDeg = seconds * 6;
    
    setTimeout(second, wait);

    function second() {
        if (minute === 60) {
            minute = 0;
            hour++;
        }
        if (arr.includes(minute) && flag === false) {
            secondsHand.style.transform = 'rotate(' + secDeg + 'deg)';
        }
        else {
            secondsHand.style.transform = 'rotate(' + secDeg + 'deg)';
            if(flag === false || seconds === 0){
            minuteHand.style.transform = 'rotate(' + minDeg + 'deg)';
            hourHand.style.transform = 'rotate(' + hourDeg + 'deg)';
            }
            arr = []
            arr.push(minute);
        }


        setClock(wait)
    }

}

setClock(1000);



