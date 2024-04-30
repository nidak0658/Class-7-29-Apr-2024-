/* var myName : string = "Shah Meer";
console.log(myName); */

// Basic Array Syntax

/* const shoppinglist : string[] = ["milk", "eggs", "bread"];

console.log(shoppinglist);
            // (New)
const items : (string | number)[] = ["milk", "eggs", "bread", 1];
            // (Array<string | number>) (Old)
console.log(items); */

// Using push Method

/* const names: string[] = [];
names.push("John"); // no error
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'. */

// Access Value with the help of Index number
/* const cars = ["Saab", "Volvo", "BMW"];
var car = cars [0];
console.log(cars[0]);
// console.log(cars.length);
// console.log(cars[-1]);
// console.log(cars[-1]);
// console.log(cars[-0]); */

// Using Readonly keyword in array
/* const names: readonly string[] = ["Dylan"];
names.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'.
// try removing the readonly modifier and see if it works? */

/* const numbers = [1, 2, 3];
// inferred to type number[]
names.push(4); // no error
// comment line below out to see the successful assignment
numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'.
var head: number = numbers[0]; // no error */

// define our tuple
var ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];
// ourTuple = ['Coding God was here', 10, true];
console.log(ourTuple);