console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
class Person {
    constructor (name, pet, residence, hobbies) {
        this.name = name;
        this.pet = pet;
        this.redidence = residence;
        this.hobbies = hobbies;
    }

    addHobby(hobby) {
        this.hobbies.push(hobby)
    }

    removeHobby(hobby) {

        const index = this.hobbies.indexof(hobby);
        if (index > -1) {
        this.hobbies.splice(index, 1);
    }
        
    }

    info() {

    }

    soundOff() {

    }

    greeting() {
        console.log("Hello fellow person!");

    }
}

// Exercise 2 OOP

    class Coder extends Person {
        constructor (name, pet, residence, hobbies) { 
            super(name, pet, residence, hobbies);
            this.occupation = "Full Stack Web Developer";

        } 

        greeting() {
            console.log("Hello fellow coder");
        }

    } 

    // Exercise 3 

    const person1 = new Person("Louis", "KC", "Palm Springs", ["Eating Treats", "Sleeping", "Gummies", "Yoga"]);
    person1.greeting()
    console.log(person1.hobbies);

    // Exercise 4

    class calculator {
        constructor() {
        this.result = 0;
        }


        add(a, b) {
            this.result = a + b;
            return this.result;
        }

        subtract(a, b) {
            this.result = a - b;
            return this.result;
        }

        multiply(a, b) {
            this.result = a * b;
            return this.result;
        }

        divide(a, b) {
            this.result = a / b;
            return this.result;
        }

        display() {
            console.log(this.result);
        }
    }

    let calc = new calculator();

    calc.add(0, 1)
    calc.display()
    calc.subtract(5, 3)
    calc.display()
    calc.multiply(1, 3)
    calc.display()
    calc.divide(8, 2)
    calc.display()




