// not a good way to reference a collection of data.
// if guestName = "Angela" {
//     alert("Welcome!");
// } else if guestName = "Jack" {
//     alert("Welcome!");
// }

//good case for making an array.
// an array is a collection of items that are related. they can be assigned to a variable.

var guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guestList[0]);
console.log(guestList[1]);
console.log(guestList[2]);
console.log(guestList[3]);
console.log(guestList[4]);
console.log(guestList[5]);
console.log(guestList.length);

//prompt challenge

var guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time.");
}