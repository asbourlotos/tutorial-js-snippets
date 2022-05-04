// var name = "Alex";
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());

/*

1. Create a prompt that asks for the user's name.
2. If they give upper or lower case names, send alert that says "Hello, <name>" with just the first character capitalized.

*/

var name = prompt("What is your name?");
var nameLength = name.length;
var firstLetter = name.slice(0,1).toUpperCase();
var remainingLetters = name.slice(1,nameLength).toLowerCase();

alert("Hello, " + firstLetter + remainingLetters + "!");