function loveCalculator(yourName, theirName) {
    // yourName = prompt("What is your name?");
    // theirName = prompt("What is their name?");
    var loveScore = Math.floor(Math.random() * 100) + 1;
    if (loveScore > 70) {
        console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%. You love each other like Kanye loves Kanye.");
    }
    
    if (loveScore > 30 && loveScore <= 70) {
        console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%.");
    }    
        
    if (loveScore <= 30) {
        console.log(yourName + " and " + theirName + "'s love score is " + loveScore + "%. You go together like oil and water.");
    }
}



loveCalculator("Alex", "Leah");