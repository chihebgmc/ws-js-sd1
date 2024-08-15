const vacationSpots = ['Norway', 'Japan', 'Australia'];

// Repeating Tasks Manually
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// ---- The For Loop ----
for (let i = 5; i <= 10; i++) {
  console.log(i);
}

// Looping in Reverse
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

// Looping through Arrays
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(vacationSpots[i]);
}

// ---- The While Loop ----
// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++) {
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

// ---- Do...While Statements ----
const cupsOfSugarNeeded = 5;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(cupsAdded);
} while (cupsAdded < cupsOfSugarNeeded);

// The break and continue Keywords
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // ------------------
  } //                         |
  console.log(i); //           |
} // <--------------------------

for (let i = 0; i < 10; i++) {
  // <------------------
  //                   |
  if (i === 5) {
    //                 |
    //                 |
    continue; // -------
  }
  console.log(i);
}
