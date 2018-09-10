"use strict"

class Animal {
  constructor(legs, blood) {
    this._legs = legs || 2;
    this._warm_blooded = blood || true;
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

let animal = new Animal();
let dog = new Dog();
let cat = new Cat();
let panda = new Panda()
let horse = new Horse();
console.log(animal._legs); // 2
console.log(horse._legs); // 4
