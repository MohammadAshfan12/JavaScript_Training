//Destructuring of Arrays
let fullName = ['Abc', 'Pqr', 'Xyz']

let [firstName, MiddleName, lastName] = fullName;
let [fn, ,ln] = fullName;
let [name, ...rest] = fullName;
console.log(firstName, MiddleName, lastName) 
console.log(fn, ln)
console.log(name, rest)

//Destructuring Object
const user = {name: 'Abc', Age: 22, planet: "Earth"}

function destructor({name, Age, planet}) {
    console.log(name, Age, planet)
}

destructor(user)

//spread operator copying elements from one array to another
var str1 = ['Pinapple']
var str2 = ['Mango', 'Orange', 'Grape', ...str1]
console.log(str2)

//copying as a argument
function sum(x,y) {
    return x + y;
}
const arr = [1,2]
console.log(sum(...arr))

//copy an array to another array
let items = [1,2,3,4]
let itemArray = [...items]
itemArray.push(4)
console.log(itemArray)

//conacate array
items = [...items, ...itemArray]
console.log(items)

//REST - Condence multiple elements into an array
function multiple(multiplier, ...theArays){
    return theArays.map(element => {
        return multiplier * element
    })
}

let arrArray = multiple(2,1,2,3);
console.log(arrArray)