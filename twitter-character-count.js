// ASSIGNMENT: get this result based on a tweet variable: "You hav written 182 characters, you have -42 characters left." numbers being dynamic based on tweet length.

var tweet = prompt("Compose your tweet:");
var currentCharacters = tweet.length;
var maxCharacters = 280;
var charactersLeft = maxCharacters - currentCharacters;

alert("You have written " + currentCharacters + " characters, you have " + charactersLeft + " characters left.");