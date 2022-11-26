// Encapsulation: 
// - Technically in encapsulation, the variables or data of a class is hidden from any other class and can be accessed only through any member function of its own class in which it is declared.
// - As in encapsulation, the data in a class is hidden from other classes using the data hiding concept which is achieved by making the members or methods of a class private, and the class is exposed to the end-user or the world without providing any details behind implementation using the abstraction concept, so it is also known as a combination of data-hiding and abstraction.
// - Encapsulation can be achieved by Declaring all the variables in the class as private and writing public methods in the class to set and get the values of variables.
// - It is more defined with the SETTER and GETTER method.

class Animal {
    #name
    #legs
    #hasTail

    constructor(name, legs, hasTail){
        this.#name = name;
        this.#legs = legs;
        this.#hasTail = hasTail;
        this.sound;
    }

    // SETTER - method to set a value of a variable in a class
    setSound(voice) {
        this.sound = voice;
    }

    setName(name) {
        this.#name = name;
    }

    setLegs(legs) {
        this.#legs = legs;
    }

    setHasTails(hasTail) {
        this.#hasTail = hasTail;
    }

    // GETTER - method to get the value from variables in a class
    getName() {
        return this.#name;
    }

    getLegs() {
        return this.#legs;
    }

    getHasTail() {
        return this.#hasTail;
    }

    getSound() {
        return this.sound;
    }
}

const animal = new Animal('Ayam', 2, true);
console.log(animal.getLegs())
console.log(`Jenis hewan ${animal.getName()}, has leg ${animal.getLegs()}`);
animal.setLegs(1);
console.log(`Jenis hewan ${animal.getName()}, has leg ${animal.getLegs()}`);