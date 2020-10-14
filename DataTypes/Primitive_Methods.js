//primitive types 

//  1.  Checking for case sensitive
function cases(str) {
    if (str === str.toUpperCase()) {
        return true
    }
    else {
        return false;
    }
}
console.log(cases('JAVASCRIPT'))

//Display type of DataType
function typeOfType() {
    console.log(typeof 2);
    console.log(typeof 'str');
    console.log(typeof new Number(0));
    let zero = new Number(0);
    if (zero) {
        console.log("zero is true");
    }
}

typeOfType();



