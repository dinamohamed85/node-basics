const os = require('os');

// Platform
console.log("Operating System.. platform :  " + os.platform());

// CPU Arch
console.log("Operating System.. CPU Arch :  " + os.arch());

// CPU Core Info
console.log("Operating System.. CPU Core : " + os.cpus());

// Free memory
console.log("Operating System.. Free memory  :  " + os.freemem());

// Total memory
console.log("Operating System.. Total memory :  " + os.totalmem());

// Home dir
console.log("Operating System.. Home dir :  " + os.homedir());

// Uptime
console.log("Operating System.. Uptime :  " + os.uptime());
