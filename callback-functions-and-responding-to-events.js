/* 

This is all about callback functions and how to respond to events.
Use the debugger to step through the code to see what is happening.

*/

function anotherAddEventListener(typeOfEvent, callback) {

    //DETECT EVENT CODE

    var eventThatHappened = {
        eventType: "keydown",
        key: "p",
        durationOfKeypress: 5
    }

    //PASS OBJECT BACK THROUGH THE CALLBACK METHOD

    if (eventThatHappened.eventType === typeOfEvent) {
        callback(eventThatHappened);
    }
}

//EXAMPLE USING OUR anotherAddEventListener HIGHER-ORDER function

anotherAddEventListener("keydown", function(event) {
    console.log(event);
});

//EXAMPLE USING AN ADDED EVENT LISTENER FOR A KEYDOWN EVENT

document.addEventListener("keydown", function(event) {
    console.log(event);
});