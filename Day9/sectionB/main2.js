//2.Write a code to write table of 3 to file

var c = require("./function.js")
var fs = require("fs")
//var data = [];
for(i=1 ; i<=10 ; i++){
    // var res = c.table(i);
    // data.push(res);
    // fs.writeFileSync("table.txt", JSON.stringify(data))

    fs.appendFileSync("table.txt", "\n" + "3 * " + i + " = " + c.table(i).toString())
}