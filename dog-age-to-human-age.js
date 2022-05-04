/*

Create a prompt that asks the user for their dog's age. 
Then, use the "Dog Age to Human Age Formula" 
to convert the age to human age and then 
alert the user with the result.

*/

var dogAge = prompt("Enter your dog's age:");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("If your dog is " + dogAge + ", then it's human age would be " + humanAge + ".");