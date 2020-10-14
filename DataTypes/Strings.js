let str = "Hello";

console.log(str.length);


//string to check wheather the string starts with the a perticular character
function  stringOperation(str) {
    if(str.startsWith("J")){
        return true;
    }
    if(str.EndsWith("v")){
        return true;
    }
}
console.log(stringOperation('JavaScript'));

//prints the index of a perticular string
let myStr = "Hello planet";
console.log(myStr.indexOf("planet"));

//print each character from a string
for(let char of myStr){
    console.log(char)
}

let str1 = "Hello";
str1 = 'h' + str.slice(1, str.length)
console.log(str1)

//To display the last occurence index of the character
console.log(str.lastIndexOf('l'))

//slice method
let sentence = "Hello Ever"
console.log(sentence.slice(1,8))

// //from the 2nd position till the end
console.log( sentence.slice(2));

let value = "fruits";
console.log(value.includes('u'))