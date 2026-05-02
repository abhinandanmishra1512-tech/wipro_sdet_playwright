// =======================
// STRINGS
// =======================

// Template literal (modern string)
let name = "Abhinandan";
console.log(`Hello ${name}`);

// =======================
// FUNCTIONS
// =======================

// Normal function
function sum(a, b) {
  return a + b;
}

// Arrow function
let add = (a, b) => a + b;

// =======================
// LOOPS
// =======================

let arr = [1, 2, 3];

// forEach loop
arr.forEach(x => console.log(x));

// =======================
// ARRAY METHODS
// =======================

// filter → select elements
arr.filter(x => x > 1);

// map → modify elements
arr.map(x => x * 2);

// reduce → combine values
arr.reduce((acc, x) => acc + x, 0);

// =======================
// TYPE CHECK
// =======================

typeof 5;        // "number"
typeof "hi";     // "string"

// =======================
// TYPE CONVERSION
// =======================

Number("5");     // 5
String(5);       // "5"

// =======================
// ARRAY OPERATIONS
// =======================

let colors = ["red", "blue"];

colors.push("green");    // add end
colors.pop();            // remove end
colors.unshift("black"); // add start
colors.shift();          // remove start

// =======================
// SEARCH
// =======================

colors.includes("red"); // true
colors.indexOf("blue"); // index

// =======================
// RANDOM NUMBER
// =======================

Math.floor(Math.random() * 100) + 1;

// =======================