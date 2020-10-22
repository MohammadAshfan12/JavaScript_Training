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
    let obj3 = new clock(null, hour1, minute1, false, speed)
    const parentElm = document.getElementById('container');
    parentElm.appendChild(obj3.getElement());
     obj3.display(false);
}
if(flag === true){
    let obj = new clock(currentDate, hour1, minute1, true, 1000);
    const parentElm = document.getElementById('container');
    parentElm.appendChild(obj.getElement());
    obj.display(true);
}
















