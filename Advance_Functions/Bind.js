let user = {
    Name: 'Abc',
    Age: 22
}

let user2 = {
    Name: 'xyz',
    Age: 21
}

function info(address, marks) {
    debugger
    console.log(this.Name+ " " +this.Age+ " "+address+ " "+marks) 
}

let func = info.bind(user, 'Mangalore', 80)
func()
