// Syncronous JS - The code is exectuted line by line

console.log("ABCD");
console.log("EFGH");

// Ascyncronous JS - Where the code is not executed in an order
// Callback functions // the below code in the set timeout function will run after 1000 millisec or 1 sec

setTimeout(() => console.log("ABCD"), 1000);
console.log("EFGH");

