//Closures - Here num = 2 is globally defined and 
//calculate function searches for the outside variable
var num = 3;
function calculate() {
    var a = 2;
    return a + num;
}

console.log(calculate());

