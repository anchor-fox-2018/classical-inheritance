"use strict"
class Binatang{
    constructor(){
        this._kaki = 4;
        this.supePower = new SuperPowered()
    }
}
class Ayam extends Binatang{
    constructor(){
        super()
        this._kaki = 2;
    }
}
class Kodok extends Binatang{
    constructor(){
        super()
    }
}
class Kelabang extends Binatang{
    constructor(){
        super()
            this._kaki = 1000;
        
    }
}
class Sapi extends Binatang{
    constructor(){
        super()

    }
}

class SuperPowered{
    useTepung(){
        return 'Crispy....hmm..'
    }
    useArang(){
        return 'Hitam Tapi Menggoda...'
    }
}

//var supePower = new SuperPowered()
var binatang = new Binatang()
var ayam = new Ayam()
var kelabang = new Kelabang()
var sapi = new Sapi()
console.log(binatang._kaki)
console.log(ayam._kaki)
console.log(ayam.supePower.useArang())
console.log(kelabang._kaki)
console.log(kelabang.supePower.useArang()+'Silahkan Dicoba...')
console.log(sapi._kaki)
console.log(sapi.supePower.useTepung())