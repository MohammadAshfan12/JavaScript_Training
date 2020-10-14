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

info.call(user, 'Mangalore', 80)
info.call(user2, 'kerala', 70)
