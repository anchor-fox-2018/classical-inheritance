"use strict"

class SuperPower {
    constructor() {

    }
    use_laser_vision(){
        console.log("pew pew pew");
    }
    be_invisible(){
        console.log("hilang");
    }

}

class Animal {
    constructor(num_legs, is_warm_blooded) {
        this.num_legs = 2;
        this.is_warm_blooded = true;
        this._superpower = new SuperPower();
    }
}

class Frog extends Animal {
    constructor() {
        super();
        this.num_legs = 4;
        this.is_warm_blooded = false;
    }
    jump() {
        console.log("Jump");
    }
}

class Bat extends Animal {
    constructor() {
        super()
    }
    fly() {
        console.log("Fly");
    }
}

class Chimpanzee extends Animal {
    constructor() {
        super()
    }
    eatBanana() {
        console.log("Banana!")
    }

}

class Fox extends Animal {
    constructor() {
        super()
    }
    run() {
        console.log("Run");
    }
}

class Chicken extends Animal {
    constructor() {
        super()
    }
    layEgg() {
        console.log("Egg");
    }
}
let binatang = new Animal();
console.log(`${binatang.num_legs} ${binatang.is_warm_blooded}`);
let binatang2 = new Frog();
console.log(`${binatang2.num_legs} ${binatang2.is_warm_blooded}`);
let binatang1 = new Chicken();
console.log(`${binatang1.num_legs} ${binatang1.is_warm_blooded}`);

let binatang3 = new Frog();
binatang3._superpower.be_invisible();