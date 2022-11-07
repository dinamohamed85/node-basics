# Node Crash Course Files

> These files go with the Node crash course on YouTube.
### Refrence 
 https://github.com/bradtraversy/node_crash_course

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
    - arch          -> CPU Architecture
    - cpus          -> CPUs Core Info
    - freemem       -> Free memory
    - totalmem      -> Total memory
    - homedir       -> Home directory
    - uptime        -> the system uptime in number of seconds
- node os.js
- url module - Uniform Resource Locator:-
    - create new instance(object) from URL class by your website url
    - href          -> Serialized URL
    - host          -> Host (root domain)
    - hostname      -> Hostname (does not get port)
    - pathname      -> Pathname
    - search        -> Serialized query
    - searchParams  -> Params object
    - searchParams.append    -> Add param 
    - searchParams.get('')   -> get param by param name
- node url.js
- events module  :-
    - API Application programming interface
    - 1- create new class extends EventEmitter class whice is returend from require('events')
    - 2- create new instance (object) from the created class
    - 3- object.on(event_name, callback function)   -> create Event listener
    - 4- object.emit(event_name)    -> Fire (raise/call) this Event 
    - Backticks ``
    - uuid    -> random Universal Unique Identifier
    - npm install uuid 
- node log_event.js
- http module  :-
    - Create server object
    - Write response
    - listening on port 
- node http.js

- ## example to practise modules :-
    - add the follwing two property to "scripts" into package.json
        - "start": "node index",
        - "dev": "nodemon index"
    - npm run dev
    - http://localhost:5000
    - http://localhost:5000/about
    - http://localhost:5000/api/users