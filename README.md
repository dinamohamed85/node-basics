# Node Crash Course Files

> These files go with the Node crash course on YouTube.

## Quick Start

- Download the latest version of node :
- https://nodejs.org/en/download

```bash
# Install dependencies
npm install

# Serve on localhost:5000
npm start
```
node index.js 
- http://localhost:5000/

## Refrence 
 https://github.com/bradtraversy/node_crash_course
 
## Node Documentation 
 https://nodejs.org/dist/latest-v18.x/docs/api/

## What would you learn in this repo :-
- class , constructor , this , method , module.exports 
- Module Wrapper Function : __dirname, __filename
### modules
- cd modules
- path module : basename() , dirname() , extname() , parse() , join()
- node path.js
- fs module - File System:- 
    - mkdir -> create folder
        - async method needs callback function , parameters: directory_name+folder_name , options , callback(error)
    - writeFile -> overwrite the content of file
        - async method needs callback function , parameters: directory_name+folder_name+file_name , content to write , callback(error)
    - File append
    - Read file
    - Rename file
    - rmdir  -> delete folder
    - write JSON File -> JSON.stringify([obj1 , obj2 , obj3])
    - copyFile
- node fs.js
- os module - Operating System:-
    - platform
    - arch      -> CPU Arch
    - cpus      -> CPU Core Info
    - freemem   -> Free memory
    - totalmem  -> Total memory
    - homedir   -> Home directory
    - uptime    -> Up time
- node os.js