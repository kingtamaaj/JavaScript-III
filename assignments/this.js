/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding - This will call the window's Object not any specific object.
* 2. Implicit Binding - The object used before the dot is this (new.this) in when a function is called.
* 3. New Binding - An object creator; which allows a function to return an object.
* 4. Explicit Binding
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// function colorBlue(Blue) {
//     console.log(this);
//     return blue;
//   }
//   colorBlue("Royal"); 

// Principle 2

// code example for Implicit Binding

// const myFruit = {
//     fruit: 'Bananas',
//     whichOne: function(name) {
//       console.log(`${this.fruit} are my favorite ${name}`);
//       console.log(this);
//     }
//   };
//   myFruit.whichOne('fruit'); 

// const fruitFunc = obj => {
//     obj.myFruit = function() {
//       console.log(`My favorite fruit is ${this.name}`);
//       console.log(this);
//     };
//   };
//   const mine = { name: 'Grapes' };
//   const yours = { name: 'Banana' };
//   fruitFunc(mine);
//   fruitFunc(yours);
  
//   // Invoke Methods on our objects
//   mine.myFruit();
//   yours.myFruit();


// Principle 3

// code example for New Binding
function MeanPerson(response) {
    this.rudeGuy = 'Do not talk to me, ';
    this.response = response;
    this.speak = function() {
      console.log(this.rudeGuy + this.response);
      console.log(this);
    };
  }
  
  const bob = new MeanPerson('Bob');
  const tom = new MeanPerson('Tom');
  
  bob.speak();
  tom.speak();


// Principle 4

// code example for Explicit Binding