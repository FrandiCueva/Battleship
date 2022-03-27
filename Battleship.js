var location1 = 3;                                // Variable Declarations
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// ---------Remove the commets syntax to "const prompt" if your are using Node.js--------
//const prompt = require("prompt-sync")();      // Users input command

// Remove /* and */ from both ends to use the corresponding while loop and make sure to apply the commet syntax for the other code!
//Use this while loop if your are using Node.js other wise use the code below

/*
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
*/

// Use this while loop code if you are using a webrowser.

while(isSunk == false){
   guess = prompt("Fire at will! (Chosose from a number 0-6):");

   if (guess < 0 || guess > 6 ){
      alert("Please Enter a valid cell number!");
   }
  else {
     guesses++;

     if (guess == location1||guess == location2|| guess == location3){
     alert("HIT!");
     hits++;

     if (hits == 3){
        isSunk = true;
        alert("You sank my battleship!");
     }
   }
     else {
        alert("MISS!");
     }
  }
}
var stats = "You took " +guesses+ " guesses to sink the battleship " + "which means your shooting accuracy is " + (3/guesses);
alert(stats);
