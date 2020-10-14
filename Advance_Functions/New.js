let User = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    print = function() {
        console.log(this.firstName+ " "+ this.lastName)
    }
}

let user = new User('M', 'A');
console.log(user)