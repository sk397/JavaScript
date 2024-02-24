//Path Methods


const path = require('path');

// Base File Name // This will give us the file name of this script
console.log(path.basename(__filename));

//Directory Name
console.log(path.dirname(__filename));

//File Extension
console.log(path.extname(__filename));

// Create Path Object / Parsing
console.log(path.parse(__filename));
console.log(path.parse(__filename).base);

// Concatenate Paths
console.log(path.join(__dirname, 'test', 'hello.html'));