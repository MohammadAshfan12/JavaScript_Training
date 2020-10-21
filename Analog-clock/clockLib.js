const hourHand = document.getElementById('hour-hand')
const minuteHand = document.getElementById('minute-hand')
const secondHand = document.getElementById('second-hand')
var hour1, minute1, speed, myfunc;

var flag = true;
export class clock {
    constructor(currentDate, h1, m1, flag) {
        if (flag === true) {
            this.hour = currentDate.getHours();
            this.minute = currentDate.getMinutes();
            this.second = currentDate.getSeconds();
            console.log(this.hour, this.minute, this.second)
        }
        else {
            this.hour = Number(h1);
            this.minute = Number(m1);
            this.second = 1;
        }
    }
    display(speed) {
        if(flag === true){
        myfunc = setInterval(() => {
            const secondsRatio = this.second++ / 60
            const minutesRatio = (secondsRatio + this.minute) / 60
            const hoursRatio = (minutesRatio + this.hour) / 12
            this.setRotation(secondHand, secondsRatio)
            this.setRotation(minuteHand, minutesRatio)
            this.setRotation(hourHand, hoursRatio);
        }, 1000);
    }
    else{
        clearInterval(myfunc);
        setInterval(() => {
            const secondsRatio = this.second++ / 60
            const minutesRatio = (secondsRatio + this.minute) / 60
            const hoursRatio = (minutesRatio + this.hour) / 12
            this.setRotation(secondHand, secondsRatio)
            this.setRotation(minuteHand, minutesRatio)
            this.setRotation(hourHand, hoursRatio);
        }, speed)
    }
    }
    setRotation(hand, rotationRatio) {
        hand.style.setProperty('--rotation', rotationRatio * 360)
    }
}
const a = document.getElementById('btn').onclick = changeTime;
const currentDate = new Date();
function changeTime() {
    flag = false;
    hour1 = document.getElementById('hor').value
    minute1 = document.getElementById('mon').value
    speed = document.getElementById('sp').value
    if((hour1 === "") && (minute === "") && (speed === "")) return
    let obj3 = new clock(hour1, minute1, speed, flag)
    obj3.display(speed);
}
if(flag === true){
    let obj = new clock(currentDate, hour1, minute1, flag);
    obj.display();
}




