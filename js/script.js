console.log('external javascript');

// Declaration of variables
var name = 'John';
console.log(name);
console.log('type of name: ' + typeof name);

var age = 45;
console.log(age);
console.log('type of age: ' + typeof age);

var isAlive = true;
console.log(isAlive);
console.log('type of isAlive: ' + typeof isAlive);

var x;
console.log(x);
console.log('type of x: ' + typeof x);

var y = undefined;
console.log(y);
console.log('type of y: ' + typeof y);

var z = null;
console.log(z);
console.log('type of z: ' + typeof z);

// Declaration of object literal with fullName prorperty
var person = {
  fullName: 'John Doe',
};

console.log(person);
console.log('type of person: ' + typeof person);

// Declaration of empty object
var person1 = {};
console.log(person1);

// Set fullName property of person 1 with dot notation
person1.fullName = 'Jane Doe';
console.log(person1);

// Get fullName of person1 with dot notation
console.log(person1.fullName);

// Set age property of person1 with dot notation
person1.age = 25;
console.log(person1);

// Set isAlive property of person1 with braket notation
person1['isAlive'] = true;
console.log(person1);

var key = 'isAlive';
console.log(person1[key]);

// Regular Function (Function Declaration)
function greeting(name) {
  return 'Hello ' + name;
}

// Invoke greeting function
var result = greeting(person1.fullName);
console.log(result);

// Function expression
var cube = function (number) {
  return number ** 3;
};

// Invoke cube function
var result1 = cube(3);
console.log(result1);

// Add sayHello method to person1
person1.sayHello = function () {
  return 'Hello everyone!';
};

console.log(person1);

var result2 = person1.sayHello();
console.log(result2);

// Declaration of empty array
var cars = [];
console.log(cars);

cars[0] = 'Opel';
cars[1] = 'BMW';
cars[2] = 'Audi';
console.log(cars);
console.log('length of cars is: ' + cars.length);

// For loop
for (var i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log('-------------------');

// Forof used with array
for (var car of cars) {
  console.log(car);
}

console.log('-------------------');

// Forin used with objects
for (var key in person1) {
  //   console.log(key);
  console.log(key + ': ' + person1[key]);
}

// alert
// alert('Bonjour');

// Confirm
// var confirmResult = confirm('Are you sure you want to exits?');
// console.log(confirmResult);

// Prompt
var positiveNumber = prompt('Enter a positve number');
console.log(positiveNumber);
