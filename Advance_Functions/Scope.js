//var variable - Here a is accessible globally
var value = 10
for(let i = 0; i < 4; i++) {
    console.log(value)
}
console.log(value)

//let varaiable 
//Here a = 30 is only accessible inside the blocks
let a = 20
for(let i = 0; i < 4; i++) {
    let a = 30
    setTimeout(function(){
        console.log(a)
         console.log("Hello"); 
    }, 0);
}

console.log(a)