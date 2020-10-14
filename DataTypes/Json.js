let user = {
    name: 'Abc',
    Age: 22,
    marks: 80,
    edit: function () {
        console.log('hello')
    }
}

//converting json object to string
let a = JSON.stringify(user)
console.log(a)
console.log(typeof a)

//convering string to object
let b = JSON.parse(a);
console.log(b)
console.log(typeof b)