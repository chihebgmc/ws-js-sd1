// Global Scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

const callMyNightSky = () =>
  'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;

console.log(callMyNightSky());

// Block Scope
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
};

logVisibleLightWaves();

console.log(lightWaves);
