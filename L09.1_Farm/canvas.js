"use strict";
// TypeScript Implementation of the Farm Simulation
class Animal {
    constructor(name, species, foodType, foodConsumption, sound) {
        if (!name || !species || !foodType || !sound) {
            throw new Error("All animals must have a name, species, food type, and sound!");
        }
        this.name = name;
        this.species = species;
        this.foodType = foodType;
        this.foodConsumption = foodConsumption;
        this.sound = sound;
    }
    singSong() {
        return `${this.name} the ${this.species}: Old MacDonald had a farm, E-I-E-I-O! And on that farm, he had a ${this.species}, E-I-E-I-O! With a ${this.sound} ${this.sound} here, and a ${this.sound} ${this.sound} there, here a ${this.sound}, there a ${this.sound}, everywhere a ${this.sound} ${this.sound}!`;
    }
    eat(foodStock) {
        if (foodStock[this.foodType] >= this.foodConsumption) {
            foodStock[this.foodType] -= this.foodConsumption;
            return `${this.name} ate ${this.foodConsumption} units of ${this.foodType}. Remaining: ${foodStock[this.foodType]} units.`;
        }
        else {
            return `Not enough ${this.foodType} for ${this.name}!`;
        }
    }
}
class FoodStock {
    constructor(stock) {
        this.stock = stock;
    }
    reduce(foodType, amount) {
        if (this.stock[foodType] >= amount) {
            this.stock[foodType] -= amount;
        }
        else {
            throw new Error("Not enough food in stock!");
        }
    }
    checkStock() {
        return this.stock;
    }
}
function objectEntries(obj) {
    return Object.keys(obj).map((key) => [key, obj[key]]);
}
function main() {
    // Initialize animals
    const animals = [
        new Animal("Bessie", "Cow", "Grass", 5, "Moo"),
        new Animal("Clucky", "Chicken", "Grains", 2, "Cluck"),
        new Animal("Rover", "Dog", "Meat", 3, "Woof"),
        new Animal("Charlie", "Horse", "Grass", 7, "Neigh"),
        new Animal("Porky", "Pig", "Junk", 4, "Oink")
    ];
    // Initialize food stock
    const foodStock = {
        "Grass": 20,
        "Grains": 10,
        "Meat": 5,
        "Junk": 8
    };
    const stock = new FoodStock(foodStock);
    // Simulate a day
    for (const animal of animals) {
        console.log("=".repeat(20));
        console.log(animal.singSong());
        console.log(animal.eat(stock.stock));
        console.log("=".repeat(20));
    }
    console.log("End of day food stock:");
    for (const [food, quantity] of objectEntries(stock.checkStock())) {
        console.log(`${food}: ${quantity} units`);
    }
}
main();
