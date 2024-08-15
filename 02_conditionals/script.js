let sale = true;

sale = false;

// if statement
if (sale) {
  console.log('Time to buy!');
}

// if...else statement
if (sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

/*
Comparison Operators:
    - Less than: <
    - Greater than: >
    - Less than or equal to: <=
    - Greater than or equal to: >=
    - Is equal to: ===
    - Is not equal to: !==
*/

console.log(10 < 12);

let hungerLevel = 7;

if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

/*
Logical Operators:
    - the and operator (&&)
    - the or operator (||)
    - the not operator, otherwise known as the bang operator (!)
*/

let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet');
}

/*
Truthy and Falsy
The list of falsy values includes:
    - 0
    - Empty strings like "" or ''
    - null which represent when there is no value at all
    - undefined which represent when a declared variable lacks a value
    - NaN, or Not a Number
*/

let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}

// Truthy and Falsy Assignment
/* 
    let username = '';
    let defaultName;

    if (username) {
    defaultName = username;
    } else {
    defaultName = 'Stranger';
    }

    console.log(defaultName);
*/

// a short-hand for the code above
let username = '';
let defaultName = username || 'Stranger';

console.log(defaultName);

// Ternary Operator
// Take a look at the if...else statement example:
let isNightTime = true;

if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

// We can use a ternary operator to perform the same functionality:
isNightTime
  ? console.log('Turn on the lights!')
  : console.log('Turn off the lights!');

// Else If Statements
let season = 'summer';

if (season === 'spring') {
  console.log("It's spring! The trees are budding!");
} else if (season === 'winter') {
  console.log("It's winter! Everything is covered in snow.");
} else if (season === 'fall') {
  console.log("It's fall! Leaves are falling!");
} else if (season === 'summer') {
  console.log("It's sunny and warm because it's summer!");
} else {
  console.log('Invalid season.');
}

// The switch keyword
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.');
    break;
}
