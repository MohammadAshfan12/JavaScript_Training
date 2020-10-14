// Performing push, pop, shift and unshift methods
const array = {
    arr: [1,2,3],
    pushItem: function () {
        this.arr.push(4);
        return this.arr;
    },
    popItem: function () {
        this.arr.pop();
        return this.arr;
    },
    shiftItem: function () {
        this.arr.shift(4);
        return this.arr;
    },
    unshiftItem: function () {
        this.arr.unshift(6);
        return this.arr;
    }
};
console.log(array.pushItem())
console.log(array.popItem())
console.log(array.unshiftItem())
console.log(array.shiftItem())

//forEach method 

let items = [{Name: "Ashfan", Age: 22}, {Name: "Kiran", Age: 23}, {Name: "Vishal", Age: 21}]
let elements = [1,2,3,4,5]

//forEach method 
elements.forEach(element => {
    console.log(element)
})

//map method - example 1
const result = elements.map(element => {
    return element*2
})
console.log(result)

//reduce method
const reducedArray = elements.reduce((acc, element) => {
    return acc += element;
},0)
console.log(reducedArray)

//filter method 
const filteredArray = elements.filter(element => {
    return element % 2 === 0
})
console.log(filteredArray)