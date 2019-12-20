const path = require("path");

//basename() - returns base file name from the path
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(__dirname);

// //extname() - returns file extension
console.log(path.extname(__filename));

//create path object

console.log(path.parse(__filename).base);

//concatenate paths
console.log(path.join(__dirname, "test", "hello.html"));
