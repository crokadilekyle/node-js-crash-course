const fs = require("fs");
const path = require("path");

//create folder
// fs.mkdir(path.join(__dirname, "test"), {}, function(err) {
//   if (err) throw err;
//   console.log("folder created");
// });

//create file
// fs.writeFile(
//   path.join(__dirname, "test", "hello.html"),
//   "<h1>Node is cool</h1>\r",
//   err => {
//     if (err) throw err;
//     console.log("file created");
//     fs.appendFile(
//       path.join(__dirname, "test", "hello.html"),
//       "<h2>I think</h2>\r",
//       err => {
//         if (err) throw err;
//         console.log("file appended to");
//       }
//     );
//   }
// );

//read file
// fs.readFile(
//   path.join(__dirname, "/test", "hello.html"),
//   "utf8",
//   (err, data) => {
//     if (err) throw err;
//     console.log(data);
//   }
// );

//rename file
fs.rename(path.join(__dirname, "/test", "hello.html"), "index.html", err => {
  if (err) throw err;
  console.log("file name changed");
});
