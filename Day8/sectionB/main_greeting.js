var c = require("./greeting.js")

var time = c.greets()
if (time >=6 && time <=12) {
    console.log("Good Morning !!");
    }
else if (time >12 && time <16) {
     console.log("Good Afternoon !!");
}
else {
    console.log("Good Evening !!");
}
