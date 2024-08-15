// Function Declarations (Regular Functions)
function greetWorld() {
  console.log('Hello, World!');
}

// Calling a Function
greetWorld();
greetWorld();
greetWorld();

// Parameters and Arguments
function sayThanks(name) {
  console.log(
    'Thank you for your purchase ' + name + '! We appreciate your business.'
  );
}

sayThanks('Cole');

// Default Parameters ES6
function greeting(name = 'stranger') {
  console.log('Hello, ' + name + '!');
}

greeting('Nick'); // Output: Hello, Nick!
greeting(); // Output: Hello, stranger!

// Return
/*
function rectangleArea(width, height) {
  let area = width * height;
}
console.log(rectangleArea(5, 7)); // Prints undefined
*/

function rectangleArea(width, height) {
  return width * height;
}

console.log(rectangleArea(5, 7));

// Function Expressions
const plantNeedsWater = function (day) {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

console.log(plantNeedsWater('Tuesday'));

// Arrow Functions ES6
const plantNeedsWaterArrow = day => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// Concise Body Arrow Functions
const plantNeedsWaterArrowConcise = day => (day === 'Wednesday' ? true : false);
