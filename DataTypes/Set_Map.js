//SET -Remove duplicates from an array
let arr = [1,2,3,4,4,5,5,6,6,6]
let sets = new Set(arr)
let result = [...sets]
console.log(result)

//add and delete item in a set
let s1 = new Set();
s1.add(1);
s1.add('Hello');
s1.add({name: "Abc"});
console.log(s1)

s1.delete('Hello')
console.log(s1)
console.log(s1.size)

//Map add and delete items
let maps = new Map([['name', 'Abc'], ['Age', '22']]);
console.log(maps)
maps.set('State', 'Karnataka')
console.log(maps)
maps.delete('name')
console.log(maps)
console.log(maps.size);
console.log(maps.entries())

//To display the keys
for(let key of maps.keys()) {
    console.log(key)
}

//To display the values
for(let value of maps.values()) {
    console.log(value)
}

//To display the enteries
for(let [key, value] of maps.entries()) {
    console.log(key, value)
}