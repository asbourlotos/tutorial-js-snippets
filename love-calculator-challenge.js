function loveCalculator(yourName, theirName) {
    // yourName = prompt("What is your name?");
    // theirName = prompt("What is their name?");
    var loveScore = Math.floor(Math.random() * 100) + 1;
    console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%.");
}

loveCalculator("Alex", "Leah");