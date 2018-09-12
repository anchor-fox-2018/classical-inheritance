"use strict"

class Animal {
    constructor(name){
        this._name = name
        this._num_legs = 2;
        this._is_warm_blooded = true;
    }

    get num_legs(){
        return this._num_legs;
    }

    get is_warm_blooded(){
        return this._is_warm_blooded;
    }

    set num_legs(value){
        this._num_legs = value  ;
    }

}

var binatang = new Animal()
console.log(binatang.num_legs);
console.log(binatang.is_warm_blooded);
console.log(binatang.num_legs = 5);
console.log(binatang.num_legs);



class Frog extends Animal{
    constructor(name){
        super(name)
        this._num_legs = 4
        
    }
    get num_legs(){
        return this._num_legs;
    }
    is_warm_blooded(boolean){
        return boolean;
    }
}
var kodok = new Frog('sawah');
console.log(kodok)

class Bat extends Animal{
    num_legs(legs){
        return legs;
    }

    is_warm_blooded(boolean){
        return boolean;
    }
}

class Chimpanzee extends Animal{
    num_legs(legs){
        return legs;
    }

    is_warm_blooded(boolean){
        return boolean;
    }
}

class Fox extends Animal{
    constructor(name){
        super(
            name
        )
        this._num_legs = 4
    }
    get num_legs(){
        return this.num_legs;
    }

    is_warm_blooded(boolean){
        return boolean;
    }
}

var rubah = new Fox('kyubi');
console.log(rubah)

class Chicken extends Animal{

    get num_legs(){
        return legs;
    }

    is_warm_blooded(boolean){
        return boolean;
    }
}
let ayam = new Chicken('kampung');

console.log(ayam);