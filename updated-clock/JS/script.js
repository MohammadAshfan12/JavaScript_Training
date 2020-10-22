import {clock} from './clock.js';
var flag = true;
function openForm() {
    document.getElementById("myForm").style.display = "block";
}
var hour1, minute1, speed;
document.getElementById('btn1').onclick = function() {openForm()};
document.getElementById('btn').onclick = function() {createClock()};

const currentDate = new Date();
function createClock() {
    flag = false;
    hour1 = document.getElementById('hor').value
    minute1 = document.getElementById('mon').value
    speed = document.getElementById('speed').value
    let clockObj2 = new clock(null, hour1, minute1, flag, speed)
    const parentElement = document.getElementById('container');
    parentElement.appendChild(clockObj2.getElement());
    clockObj2.display(flag);
}
if(flag === true){
    let clockObj = new clock(currentDate, hour1, minute1, flag, 1000);
    const parentElm = document.getElementById('container');
    parentElm.appendChild(clockObj.getElement());
    clockObj.display(flag);
}
















