// Creating Object Literals
let spaceship = {
  fuelType: 'diesel',
  color: 'silver',
};

// Accessing Properties
let spaceshipAlpha = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  'Active Mission': true,
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn'],
  'Secret Mission': 'Discover life outside of Earth.',
};

// Dot Notaion
const crewCount = spaceshipAlpha.numCrew;
const planetArray = spaceshipAlpha.flightPath;

console.log(crewCount);
console.log(planetArray);

// Bracket Notation
const isActive = spaceshipAlpha['Active Mission'];
console.log(isActive);

// Property Assignment
let spaceshipBeta = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Secret Mission': 'Discover life outside of Earth.',
};

spaceshipBeta.color = 'glorious gold';
spaceshipBeta.numEngines = 4;
delete spaceshipBeta['Secret Mission'];

console.log(spaceshipBeta);
console.log(spaceshipAlpha);

// Methods
const alienShip = {
  invade() {
    console.log(
      'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'
    );
  },
};

alienShip.invade();
