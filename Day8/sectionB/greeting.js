// Create a user defined local module greeting.js containing a function greet() that greets user based on time
// of the day. If its morning, greet user as "Good morning", if its afternoon, greet user as "Good
// Afternoon" else as "Good Evening"
// Create a main module that will bring in the greeting.js module and invoke the greet function

exports.greets = function greet(){
    var d = new Date().getHours()
        console.log(d);
}
