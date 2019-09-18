/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window binding is not supposed to be used and can't be used in strict JS. It calls on 

* 2. Implicit binding is used when using dot notation to call upon a function. What is being called on is always the thing to the left of the dot that actually calls the function.

* 3. Anytime a "new" keyword is used a new object is created. Then the "this" keyword can be used to reference the new object that was created.

* 4. Explicit is for when the this keyword is used in a stand alone function and not in an object of its own. Therefore dot notation not being possible.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

window.number = 6;

function sayFavoriteNumber() {
   console.log(`My favorite number is ${this.number}`)
};

sayFavoriteNumber();

// Principle 2

// code example for Implicit Binding

const cat = {
    name: "Shadow",
    age: 11,
    weight: "overweight",
    checkup() {
        console.log (`${this.name} is ${this.weight}`)
    },
}
const dog = {
    name: "Blue",
    age: 5,
    weight: "54lbs",
    checkup() {
        console.log (`${this.name} is ${this.weight}`)
    },
}
cat.checkup();
dog.checkup();


// Principle 3

// code example for New Binding

function User (name,age){
    this.name = name
    this.age = age
}

const brendan = new User("Brendan", 22);

console.log(brendan);

// Principle 4

// code example for Explicit Binding

function greet () {
    console.log(`Hello, my name is ${this.name} and I like ${this.activity}`)
  };
  
  const user1 = {
    name: 'Batman',
    age: 40,
    activity: 'Fighting Crime'
  };
 

greet.call(user1);
greet.apply(user1);


