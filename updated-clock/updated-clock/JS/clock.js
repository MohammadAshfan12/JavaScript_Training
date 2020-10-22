var myfunc;
export class clock {
    element;
    hourHand;
    minuteHand;
    secondHand;
    constructor(currentDate, h1, m1, flag, speed) {
        if (flag === true) {
            this.hour = currentDate.getHours();
            this.minute = currentDate.getMinutes();
            this.second = currentDate.getSeconds();
            this.speed = speed;
            this.create()
        }
        else {
            
            this.hour = Number(h1);
            this.minute = Number(m1);
            this.second = 1;
            this.speed = speed===""?1000:speed;
            this.create()
        }
    }
    create = () => {
        this.element = document.createElement('div');
        this.element.setAttribute('id', 'clock');
        this.element.setAttribute('class', 'clock');
        this.element.setAttribute('style','background-color:rgb(248, 244, 244);')
        this.element.innerHTML = `
        <div class="number number1">1</div>
        <div class="number number2">2</div>
        <div class="number number3">3</div>
        <div class="number number4">4</div>
        <div class="number number5">5</div>
        <div class="number number6">6</div>
        <div class="number number7">7</div>
        <div class="number number8">8</div>
        <div class="number number9">9</div>
        <div class="number number10">10</div>
        <div class="number number11">11</div>
        <div class="number number12">12</div>
        <div class="hand hour" id="hour-hand"></div>
        <div class="hand minute" id="minute-hand"></div>
        <div class="hand second" id="second-hand"></div>
        `;
        this.secondHand = this.element.querySelector('#second-hand');
        this.minuteHand = this.element.querySelector('#minute-hand');
        this.hourHand = this.element.querySelector('#hour-hand');
    }
    func() {
        setInterval(() => {
            const secondsRatio = this.second++ / 60
            const minutesRatio = (secondsRatio + this.minute) / 60
            const hoursRatio = (minutesRatio + this.hour) / 12
            this.setRotation(this.secondHand, secondsRatio)
            this.setRotation(this.minuteHand, minutesRatio)
            this.setRotation(this.hourHand, hoursRatio);
        }, this.speed)
    }
    display(flag) {
        if (flag === true) {
            this.func()
        }
        else {
            this.func()
        }
    }
    setRotation(hand, rotationRatio) {
        hand.style.setProperty('--rotation', rotationRatio * 360)
    }
    getElement() {
        return this.element;
    }
}


