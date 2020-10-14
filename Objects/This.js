const user = {
    Name : 'Abc',
    Age: 22,
    fun() {
        console.log(this)
    }
}

//This function belong to the user object
user.print = function() {
    console.log(this)
}
user.print();

//this function belongs to window object
function Hello() {
    console.log(this)
}
Hello()

//This function belongs to Car object
function Car(name){
    this.name = name;
    console.log(this)
}

var c = new Car('Zen')

