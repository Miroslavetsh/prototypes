// const Animal = function(options) {
//     this.name = options.name
//     this.color = options.color
// }

// Animal.prototype.voice = function() {
//     console.log('Basic voice from', this.name)
// }

// const dog = new Animal ({name: 'Rex', color: '#fff'})
// const dog = {name: 'Rex', color: '#fff'}

// console.log(dog)
// dog.voice()


// const Cat = function(options) {
//     Animal.apply(this, arguments)

//     this.hasTail = options.hasTail
//     this.type = 'cat'
// }

// Cat.prototype = Object.create(Animal.prototype)
// Cat.prototype.constructor = Cat

// Animal.prototype.voice = function() {
//     console.log('This sound goes from', this.name)
// }

// Cat.prototype.voice = function() {
//     Animal.prototype.voice.apply(this, arguments)
//     console.log(this.name, 'says myau')
// }

// const cat = new Cat({name: 'Vasya', color: '#000', hasTail: true})

// cat.voice()


// ES 6+

class Animal {
    constructor(options) {
        this.name = options.name
        this.color = options.color
    }

    voice() {
        console.log(`Base voice from ${this.name}`)
    }
}

const dog = new Animal ({name: 'Rex', color: 'white'})


class Cat extends Animal {
    constructor(options) {
        super(options)

        this.hasTail = options.hasTail
        this.type = options.type || 'cat'
    }

    voice() {
        super.voice()
        console.log(`${this.name} says myau`)
    }
}

const cat = new Cat({name: 'Vasya', color: '#000', hasTail: true})

console.log(cat)
cat.voice()


// Examples

Object.prototype.print = function() {
    console.log(`I am obj `, this)
}

cat.print()

Array.prototype.mapAndLog = function() {

    return this.map.apply(this, arguments)
}

console.log([1, 2, 3, 4, 5].mapAndLog(x => x**2))

String.prototype.toTag = function(tagName) {
    return `<${tagName}>${this}</${tagName}>`
}

console.log('elelelel'.toTag('strong'))
console.log('elelelel'.toTag('em'))


Number.prototype.toBigInt = function() {
    return BigInt(this)
}

const num = 42
console.log(num.toBigInt());