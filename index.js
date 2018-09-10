"use strict"

class Animal {
  constructor(legs, blood) {
    this._legs = legs || 2;
    this._warm_blooded = blood || true;
    this._super_power = new SuperPower();
  }
}

class Dog extends Animal {

}

class Cat extends Animal {

}

class Panda extends Animal {

}

class Horse extends Animal {
  constructor() {
    super(4, true);
  }
}

class SuperPower {
  constructor () {}
  use_laser_vision() {
    console.log('For Asgard!');
  }
  be_invisible() {
    console.log('Leave Hulk alone!');
  }
}

let animal = new Animal();
let dog = new Dog(4, true);
let cat = new Cat();
let panda = new Panda()
let horse = new Horse();
console.log(animal._legs); // 2
console.log(dog._legs); // 4
console.log(horse._legs); // 4
dog._super_power.use_laser_vision(); // For Asgard!
cat._super_power.be_invisible(); //Leave Hulk alone!
