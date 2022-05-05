function loveCalculator(yourName, theirName) {
    // yourName = prompt("What is your name?");
    // theirName = prompt("What is their name?");
    var loveScore = Math.floor(Math.random() * 100) + 1;
    if (loveScore > 70) {
        console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
    } else {
        console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%.");
    }
}



loveCalculator("Alex", "Leah");