class Animal {
    constructor() {
        this._notRobot = true;
        this._legs = 4;
        this._head = 1;
        this._tails = 1;
        this._cuteLevel = 0;
    }

    get Superpower() {
        return new Superpower();
    }
}

//for all the animals

/////////
// fox //
/////////
class Fox extends Animal {
    constructor() {
        super();
        this._cuteLevel = 7;
    }

    color() {
        this._color = 'red (gray if you are color blind) (colorless if you are not racist)';
        return this;
    }
}

/////////
// dog //
/////////
class Dog extends Animal {
    constructor() {
        super();
        this._cuteLevel = 24;
    }

    caresAboutHuman() {
        this._caresAboutHuman = true;
        return this;
    }

    needsLove() {
        this._needsLove = true;
        this._howMuchLove = '100% (140% if sad)';
        return this;
    }
}

////////////
// rabbit //
////////////
class Rabbit extends Animal {
    constructor() { 
        super();
        this._cuteLevel = 24;
    }

    bitesHuman() {
        this._bitesHuman = true;
        return this;
    }

    canRoastYou() {
        this._canRoastYou = 'yes, absolutely';
        return this;
    }
}

//superpower
class Superpower {
    constructor() {
    }
    kills() {
        this._kills = true;
        return this;
    }

    hatesYou() {
        this._hatesYou = false;
        return this;
    }

    invisibility() {
        this._invisibility = 'true, it runs away quite often';
        return this;
    }
}

////////////////
// test cases //
////////////////

let doggo = new Dog();
let idkwhyhacktiv8usesfox = new Fox();
let idkwhypeoplelovethisDEMON = new Rabbit();

//before using anything
console.log('0: ');
console.log(doggo);
console.log(idkwhyhacktiv8usesfox);
console.log(idkwhypeoplelovethisDEMON);
console.log('\n')

//after using something
doggo.caresAboutHuman().needsLove();
idkwhyhacktiv8usesfox.color();
idkwhypeoplelovethisDEMON.bitesHuman().canRoastYou();


console.log('1: ');
console.log(doggo);
console.log(idkwhyhacktiv8usesfox);
console.log(idkwhypeoplelovethisDEMON);
console.log('\n');

//after using superpower
doggo.Superpower.hatesYou()
idkwhyhacktiv8usesfox.Superpower.invisibility()
idkwhypeoplelovethisDEMON.Superpower.kills()

console.log('2: ');
console.log(doggo.Superpower.hatesYou());
console.log(idkwhyhacktiv8usesfox.Superpower.invisibility());
console.log(idkwhypeoplelovethisDEMON.Superpower.kills());
console.log('\n');