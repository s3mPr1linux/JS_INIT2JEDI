//---ES5---
function Animal(tipo) {
    if(this instanceof Animal) {
        if(tipo) this.tipo = tipo
    } else {
        throw new Error("Animal must be created with new operator")
    }

}

Animal.prototype.obterTipo = function() {
    return this.tipo
}

Animal.prototype.tipo = 'desconhecido'

function Cachorro(nome) {
    this.nome = nome 
    Animal.call(this, 'mamifero')
    this.constructor = Cachorro
}
Cachorro.prototype = new Animal('mamifero')

let dog = new Cachorro('Dog')






//---ES6---
class AnimalC {
    //essa funçao construtora sera execultada
    constructor(tipo) {
        //verifica se tem tipo, se nao tiver vai ser o padrao
        if(tipo) {
            this.tipo = tipo
        }
    }

    //colocar as funçoes
    obterTipo() {
        return this.tipo
    }
}

//o extendes serve pra herdar, nesse caso o tipo de AnimalC
//para isso precisa execultar o metodo super e passar o tipo
class GatoC extends AnimalC {
    constructor(nome) {
        super('mamifero')
        this.nome = nome
    }
}

//definiu o tipo padrao se nao tiver tipo
AnimalC.prototype.tipo = 'desconhecido'

let animal = new AnimalC('anfibio')
let sapo = new AnimalC()
let mingal = new GatoC('mingauu')

// console.log(animal)
// console.log(gato)
// console.log(typeof animal)
// console.log(typeof gato)
// console.log(typeof Animal)
// console.log(typeof AnimalC)
// console.log(animal.obterTipo())
// console.log(gato.obterTipo())
console.log(Animal.prototype)
console.log(AnimalC.prototype)
console.log(mingal)
console.log(sapo)
