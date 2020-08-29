class Hunter extends Traveler {
  constructor(name) {
    super(name);
    this.food = 2;
  }
  hunt() {
    this.food += 5;
  }
  eat() {
    if (this.food < 2) {
      this.isHealthy = false;
      this.food = 0;
    } else {
      this.food -= 2;
    }
  }
  giveFood(traveler, numOfFoodUnits) {
    if (this.food >= numberOfFoodUnits) {
      this.food -= numberOfFoodUnits;
      traveler.food += numberOfFoodUnits;
    }
  }
}
