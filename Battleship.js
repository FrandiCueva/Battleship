var location1 = 3;                                // Variable Declarations
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
const prompt = require("prompt-sync")();      // Users input command

//Use this while loop if your are using Node.js other wise use the code below

console.log("Please Enter a Number from 0-6!");

while (isSunk == false){
 guess = prompt("Fire at will: ");

  if (guess < 0 || guess > 6){
    console.log("Please enter a valid cell number!"); 
 }
    else {
    guesses ++;

    if (guess == location1 || guess == location2 || guess == location3){
     console.log("HIT!");
     hits ++;
   
     if (hits == 3){
      isSunk = true;
      console.log("You Sank my Battleship!");      
   }
 } 
   else {
      console.log("MISS!");
  }
 }
}
var stats = "You took " + guesses + " guesses to sink the ship " + "which means your shooting accurcacy was";
var average = 3/guesses;

if (average == 1){
console.log(stats,"perfect");
}
else {
console.log(stats, "imprecise");
}


