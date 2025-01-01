// Primitive Types

// Number
// String
// Boolean
// Null
// Undefined
// Symbol
// BigInt

//  Let keyword basics

let someValue = "Value";

let hens = 4;
hens--;

let roosters = 2;
roosters - 10;

hens + 10;

console.log(hens + roosters);

// Unary operator

let firstNAme = "Ziggy";

firstNAme.length;
firstNAme[1];
firstNAme[length - 1];

// String are Immutable in JS

// String Template Litrels

// Comparison Operator || PRogramming Logic

55.1 <= 55.5; // true

"hellow".length >= "helloww".length; //false

"a" < "A"; //false

"A" < "a"; //false

"B" < "a"; //true

//
// Equality Operators

// not equal
// strict equality
// strict non-equality
// equality

4 == 4; //true
// 4 == "4";
//false

//
// If Else

let rating = 3;

if (rating === 3) {
  console.log("You are a superStar");
}

let num = 89;

if (num === 89) {
  console.log("The number is odd !");
}

if (num % 2 !== 0) {
  console.log("Odd number");
}

//  Nesting Conditions

let password = "chicken";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Its a valid password");
  } else {
    console.log("password cannot contain white space");
  }
} else {
  console.log("Password must be longer");
}

if (password.length > 6 && password.indexOf(" ") === -1) {
  console.log("Its a vlid password");
} else {
  console.log("Its a invalid password");
}

// Truthy and falsy Values

let mystery = 5;

if (mystery) {
  console.log("TRUTHY");
} else {
  console.log("FALSY");
}

// Logical Operators

//  AND => &&
//  OR => ||
//  NOT => !

// Operator Precendence

let x = 7;

x == 7 || (x === 3 && x > 10);

// Switch Statement

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  default:
    console.log("There are no days left");
}

// ternary operator

let numT = 7;

console.log(numT === 7 ? "Lucky" : "Not Bad");
