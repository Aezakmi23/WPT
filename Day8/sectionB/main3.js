//Read data from file(create a dummy file and write some data in it)

var fs = require("fs")
var data = fs.readFileSync("table.txt")
//console.log(data.toString());

fs.writeFileSync("dummy.txt", data.toString())
