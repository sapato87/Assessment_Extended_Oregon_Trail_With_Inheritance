const mainElement = document.querySelector("main");
const wagonElement = document.createElement("div");
wagonElement.id = "wagon";
const travelersElement = document.createElement("div");
const travelerName = document.createElement("name");
const travelerFood = document.createElement("food");
const travelerIsHealthy = document.createElement("ishealthy");
const wagonPassengers = document.createElement("passengers");

let wagon = new Wagon(2);
// Create variables for three travelers
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 2. The wagon starts with 2 seats. We haven't added travelers to the wagon yet.`
);
wagon.join(henrietta);
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 1. Henrietta just joined.`
);
wagon.join(juan);
wagon.join(maude); // There is no room for her!
console.log(
  `Wagon Seat Count?: ${wagon.getAvailableSeatCount()} – EXPECTED: 0 – There is no room for Maude, but Juan was able to join.`
);
henrietta.hunt(); // Henrietta searching for food.
juan.eat(); // Juan eats – as Juan does.
juan.eat(); // Juan has run out of food!
console.log(juan);
console.log(
  `Wagon Should Quarantine?: ${wagon.shouldQuarantine()} – EXPECTED: true. Juan has run out of food and become unhealthy!`
);
console.log(`Wagon's Total Food?: ${wagon.totalFood()} – EXPECTED: 3.`);
