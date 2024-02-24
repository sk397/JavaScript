//Creating a Server


const http = require('http');
const path = require('path');
const fs = require ('fs');

// Creating a server object  // We create a function with request and response as parameter
const server = http.createServer((req, res) => {

// console.log(req.url);  // This shows the url parameter request made


// // Reading the content from another file and showcasing it here
// if(req.url === '/') {
//    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
//     if (err) throw err;
//     res.writeHead(200, {'content-type': 'text/html'});
//     res.end(content);
//    })


//     // res.writeHead(200, {'content-type': 'text/html'}) //Writing to the header, can see the same in Network tab in Dev tools in browser
//     // res.end('<h1>Home Page<h1>')
// }

// // Reading the about page

// if(req.url === '/about') {
//     fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
//      if (err) throw err;
//      res.writeHead(200, {'content-type': 'text/html'});
//      res.end(content);
//     })
//  }


// // Reading from an API and returning the JSON

// if(req.url === '/api/users') {

// const users = [
//     {name: 'Bob', Age:30},
//     {name: 'John', Age:22}
    
// ];
// res.writeHead(200, {'content-type': 'application/json'})
// res.end(JSON.stringify(users))

// }

// Build a file path [Making it dymanic] // If the req.url is / it should return
// Index.html else it would load, whatever the file is in the folder

let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

// Exntension of File
let extname = path.extname(filePath);

//Initial content type
let ContentType = 'text/html';

// check ext and set content type
switch (extname) {
    case '.js':
        ContentType = 'text/javascript';
        break;
    case '.css':
        ContentType = 'text/css';
        break;
    case '.json':
        ContentType = 'application/Json'
        break;
    case '.png':
        ContentType = 'image/png'
        break;
    case '.jpg':
        ContentType = 'image/jpg'
        break;  

}

// Read File  // Error Handeling
fs.readFile(filePath, (err, content) => {
    if(err) {
        if(err.code == "ENOENT") {
            //Page Not found
            fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                res.writeHead(200, { 'content-type': 'text/html' });
                res.end(content, 'utf8');
            })

        } else {
            // Some Server Error
            res.writeHead(500);
            res.end(`Serever Error ${err.code}`);
        }  

    } else {
        //Success
        res.writeHead(200, {'content-type': ContentType})
        res.end(content, 'utf8')
    }
})

});


// we will look for the port in processenv.port or Setting the server port 5000 or
const PORT = process.env.PORT || 5000;

// listening to the server // Adding the port and the callback function
server.listen(PORT, () => console.log(`Server running on Port ${PORT}`));

