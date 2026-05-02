let a = "Abhi";
let b = "dhruv";
let c = "aaryan";

let d = "Hello "+ a + ", " +b+" and "+c+"!";
console.log(d);


// Template Literals
let e = `Hello ${a}, ${b} and ${c}!`;
console.log(e);

let f = `The length of a is ${a.length}`;
console.log(f);
console.log(f);


function greet(name){
    return `Hello ${name}!`;
}
console.log(greet("abhinandan mishra"));

//Function perforoming Table calculations
function table(num){
    for(let i = 1;i<=10;i++){
        console.log(`${num} x ${i} = ${num * i}`);
    }
}
table(5);

//Arrow Functions
let sum = (x,y) => x + y;
console.log("Sum of 5 and 10:",sum(5,10));

//Call back function
let arr = [1, 2, 3, 4, 5,"abhi"];

arr 
  .filter(x => typeof x === "number")
  .map(y => y * 2)
  .forEach(x => console.log("Element after *2:", x));

console.log("-----------------------")

// forEach() ->just loop
let arr1 = [1,2,3,4,5];
arr1.forEach(x =>{
    console.log(x)
})

console.log("-----------------------")

//map() -> returns a new array, use when we need to change the data
let arr2 = [1,2,3,4,5,6,8];
let doubled = arr2.map(x => x * 2);
console.log(doubled);

console.log("-----------------------")

//filter() -> selects specific elements
let arr3 = [1,2,3,4,5,6];
let even = arr3.filter(x => x%2 == 0);
console.log(even);

console.log("-----------------------")

//find() -> returns the first element that matches the condition 
let arr5 = [2,3,4,5,6];
console.log(arr5.find(x => x > 3))
console.log("-----------------------")

//Combining everything learned till now:-
let arr4 = [1,2,3,4,5,6,7,8,9,10];
arr4
    .filter( x => x%2 == 0)
    .map(x => x*10)
    .forEach(x => console.log(x));


console.log("-----------------------")
// Using find()
let array = [5, 12, 8, 20, 3, 18];
let result = array 
    .filter(x => x > 10)
    .map(x => x*2)
    .find(x => x > 30)
console.log(result);

 // console.log(Math.floor(Math.random()*10));
   arr.filter(x => typeof x === "number").map(y => y * 2).forEach(abc => console.log("Element after * 2:", abc * 2));
// console.log(arr.find(x => x === "Aaryan1")); 
// Arrow function is represented by =>

console.log(Math.floor(Math.random() * 100) + 1); // 1 to 100
// floor -> rounds down to the nearest integer 0.9 --> 0
// 0 --> 99.999 -> 99 [0 - 99]

// Math.random --> 0 - 1 * 10 --> 0 - 10
// Math.floor(x) --> 0.3 (0, 1) = 0, 1.6 (1, 2) = 1, 3.998 (3, 4) = 3
// floor(0.1, 9.999) -> [0, 9]

// == / ===
// console.log(5 == "5"); 
// console.log(5 === "5");

let strnum = "5";
console.log(Number(strnum));
console.log(String(5));

let val = "0.6";
console.log(parseInt(val)); // 0
console.log(parseFloat(val)); // 0.6

// floor [int] -> Low int, parseInt -> type conversion (string -> int)
let colors = ["red", "green", "blue"];
console.log(colors.indexOf("yellow")); // -1
console.log(colors.includes("yellow")); // false
console.log(colors.length); // 3
console.log(colors[3]); // undefined
console.log(colors[colors.length - 1]); // "blue"
colors.push("yellow"); // Adds "yellow" to the end of the array
console.log(colors); // ["red", "green", "blue", "yellow"]
colors.pop(); // Removes the last element ("yellow")
console.log(colors); // ["red", "green", "blue"]
colors.unshift("purple"); // Adds "purple" to the beginning of the array
console.log(colors); // ["purple", "red", "green", "blue"]
colors.shift(); // Removes the first element ("purple")
console.log(colors); // ["red", "green", "blue"]
// [red] [green] [blue] --> undefined

// let indexOf = "yellow";
// for (let i = 0; i < colors.length; i++) {
//     if(colors[i] === indexOf) {
//         return i;
//     } if(i == colors.length - 1) {
//         return -1;
//     }
// }

// remove by index, obj, [1, length - 2] --> math.random() * (length - 2)
console.log(colors.splice(0, 1));
console.log(colors.splice(1, 2));
console.log(colors.splice(1, 3));
// console.log(colors.splice(Math.floor(Math.random() * (colors.length - 2)), 1));
// let str = "Hello World";
// console.log(str.slice(0, 5)); // "Hello"