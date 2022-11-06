const os = require('os');

// Platform
console.log("Operating System.. platform :  " + os.platform());

// CPU Architecture
console.log("Operating System.. CPU Arch :  " + os.arch());

// CPU Core Info
console.log("Operating System.. CPUs Core Info :  ");
console.log(os.cpus()[0]);

// Free memory
console.log("Operating System.. Free memory  :  " + os.freemem());

// Total memory
console.log("Operating System.. Total memory :  " + os.totalmem());

// Home dir
console.log("Operating System.. Home dir :  " + os.homedir());

// Uptime :  time in second when the system in be up
console.log("Operating System.. Uptime :  " + os.uptime());
