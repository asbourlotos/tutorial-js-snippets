function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    
    var output = [];
    var fNum = -1;
    var sNum = 1;
    var sum = 0;
    
    for (var i = 0; i < n; i++) {
        sum = fNum + sNum;
        output.push(sum);
        fNum = sNum;
        sNum = sum;
    }
    
    return output;
    
    //Return an array of fibonacci numbers starting from 0.
    
//Do NOT change any of the code below 👇
}