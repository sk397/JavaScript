// OS related detials 

const OS = require('os');

// Platform
console.log(OS.platform());

//CPu Arch
console.log(OS.arch());

// Cpu Core
console.log(OS.cpus());

// Free Memory
console.log(OS.freemem());

//Total memory
console.log(OS.totalmem());

// Hone Diretory
console.log(OS.homedir());

//Uptime - Amount of time your system is up
console.log(OS.uptime());