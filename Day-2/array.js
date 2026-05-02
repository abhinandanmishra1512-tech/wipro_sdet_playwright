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