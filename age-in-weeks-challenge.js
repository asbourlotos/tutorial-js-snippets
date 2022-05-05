function lifeInWeeks(age) {
    
/************Don't change the code above************/    
    //Write your code here.
    var maxYears = 90;
    var maxMonths = 90 * 12;
    var maxWeeks = 90 * 52;
    var maxDays = 90 * 365;
    var ageMonths = age * 12;
    var ageWeeks = age * 52;
    var ageDays = age * 365;
    var yearsLeft = maxYears - age;
    var monthsLeft = maxMonths - ageMonths;
    var weeksLeft = maxWeeks - ageWeeks;
    var daysLeft = maxDays - ageDays;
    console.log("You have " + daysLeft + " days, " + weeksLeft + " weeks, and " + monthsLeft + " months left.")
/*************Don't change the code below**********/
}

lifeInWeeks(34);