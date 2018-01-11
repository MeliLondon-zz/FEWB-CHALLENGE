/* Directions:
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha! */

var laugh = function (number) {
    var laughMessage = "";
    for (var i = 0; i < number; i++) {
       laughMessage += "ha";
    }
    return laughMessage + "!";
}

console.log(laugh(10));
