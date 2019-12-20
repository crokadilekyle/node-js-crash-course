const url = require("url");

const myUrl = new URL("https://kylemerl.com/?project=websites");

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Host (root domain)
console.log(myUrl.host);

//Does not get port #
console.log(myUrl.hostname);

//Gets file
console.log(myUrl.pathname);

//Get Search parameters
console.log(myUrl.search);

//Get search parameters object
console.log(myUrl.searchParams);
myUrl.searchParams.append("abc", "123");
console.log(myUrl.searchParams);
myUrl.searchParams.forEach((value, name) => console.log(value, name));
