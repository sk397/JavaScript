// URL part of the JS

const url = require('url');

const myUrl = new URL ('https://mywebsite.com/hello.html?id=100&status=active')

//Serialised URL
console.log(myUrl.href);
console.log(myUrl.toString());

//Hostname (Does not gives the port number, just in case the website has it)
console.log(myUrl.hostname);

//pathname
console.log(myUrl.pathname);

//Serialised Query
console.log(myUrl.search);

// Creating an Object out of the URL - Search Parameters
console.log(myUrl.searchParams);

//Adding parameters to the URK
myUrl.searchParams.append("abc", "123")
console.log(myUrl.searchParams);

//Looping through the params
myUrl.searchParams.forEach((value,name) => console.log(`${name} :${value}`));