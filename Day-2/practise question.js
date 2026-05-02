// Question 1: The Guest List Formatter
// Goal: Practice Template Literals and Array Methods.
// Write a function called formatGuests that takes an array of names. The function should:
//1. Remove the first name from the list (it’s the host, not a guest).
// 2.Add "Guest: " before each remaining name using .map().
// 3.Return a single string where each guest is on a new line.
function formatGuests(names) {
  
    names.shift();


    let guests = names.map(name => `Guest: ${name}`);

    
    return guests.join("\n");
}


let list = ["Abhinanda", "Raj", "Rahul", "Aman"];

let result = formatGuests(list);
console.log(result);

// Question 2: The Logic Gate (Filter & Math)
// Goal: Practice Arrow Functions, filter, and Math methods.
// Create an arrow function called getHighNumbers. It should take an array of mixed types (strings and numbers) and:
// 1.Filter the array to keep only the numbers.
// 2.Filter those numbers again to only keep ones greater than a random threshold between 1 and 50.
// 3.Return the final array.

const getHighNumbers = (arr) => {
   
    const threshold = Math.floor(Math.random() * 50) + 1;
    console.log("Threshold:", threshold);

    const onlyNumbers = arr.filter(item => typeof item === "number");

   
    const result = onlyNumbers.filter(num => num > threshold);

    return result;
};


let data = [10, "hello", 45, 60, "hi", 5, 80];

let output = getHighNumbers(data);
console.log("Result:", output);

// Question 3: The Price Calculator
// Goal: Practice Type Conversion and splice.
// You have an array of prices, but they are currently strings. Write a script that:
// 1.Removes the last item in the array using an array method (because it's a "handling fee" you want to calculate separately).
// 2.Converts the remaining string prices into actual numbers.
// 3.Calculates the sum of those numbers using an arrow function.
// 4.Prints: "Total Price: $[sum]" using a template literal.
 

let prices = ["100", "200", "300", "50"];


let handlingFee = prices.splice(-1)[0];


let numericPrices = prices.map(price => Number(price));

const total = numericPrices.reduce((sum, price) => sum + price, 0);


console.log(`Total Price: $${total}`);
console.log(`Handling Fee: $${handlingFee}`);