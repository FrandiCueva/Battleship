var location1 = 3;                                // Variable Declarations
var location2 = 4;
var location3 = 5;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;
const prompt = require("prompt-sync")();      // Users input command


while (isSunk == false){

 guess = prompt("Fire at will (chose from 0-6): ");

 //compare?

  if (guess < 0 || guess > 6){

    console.log("Miss! Enter a valid number!");
    guess = prompt("Fire at will: ");

 }

    else {
    guesses ++;

    if (guess == location1 || guess == location2 || guess == location3){

    hits ++;

    if (hits == 3){

        isSunk == true;
        console.log("You Sank my Battleship!");      //change "console.log" to "alert" syntax if using it on a webpage otherwise keep console.log for node.js

    }

    }
 }

}
