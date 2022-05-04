// ASSIGNMENT: alert the message that is the complete tweet, where it is sliced within 280 characters only. (truncate if exceeding max.)

var tweet = prompt("Compose your tweet:");
var finalTweet = tweet.slice(0,280);
alert(finalTweet);

// one line answer

// alert(prompt("Compose your tweet:").slice(0,140));