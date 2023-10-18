const http = require('http');
const fs = require('fs');
const dotenv = require('dotenv').config();

// Made the routing using If else statements
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-type': 'text/html'});
//     if(req.url === "/") {
//         fs.readFile('index.html', 'utf-8', (err, data) => {
//             if(err) {
//                 res.writeHead(404);
//                 res.write("<h1>File not <em>found</em></h1>")
//                 console.error(err);
//             } else {
//                 res.write(data);
//                 // console.log(req.url);
//             }
//             res.end(); 
//         });
//     } else if(req.url === "/about") {
//         fs.readFile('about.html', 'utf-8', (err, data) => {
//             if(err) {
//                 res.writeHead(404);
//                 res.write("Page not found");
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//     } else if(req.url === "/contact-me") {
//         fs.readFile('contact-me.html', 'utf-8', (err, data) => {
//             if(err) {
//                 res.writeHead(404);
//                 res.write("Page not found");
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//     } else {
//         fs.readFile('404.html', 'utf-8', (err, data) => {
//             if(err) {
//                 res.writeHead(404);
//                 res.write("Page not found");
//             } else {
//                 res.write(data);
//             }
//             res.end();
//         });
//     }


// }).listen(8080);

// made the below routing using switch case
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-type': 'text/html'});
    switch(req.url) {
        case "/":
            fs.readFile('index.html', 'utf-8', (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.write("<h1>File not <em>found</em></h1>")
                    console.error(err);
                } else {
                    res.write(data);
                    // console.log(req.url);
                }
                res.end();
            
            });
            break;
        
        case "/about":
            fs.readFile('about.html', 'utf-8', (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.write("Page not found");
                } else {
                    res.write(data);
                }
                res.end();
            });
            break;
        
        case "/contact-me":
            fs.readFile('contact-me.html', 'utf-8', (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.write("Page not found");
                } else {
                    res.write(data);
                }
                res.end();
            });
            break;
        
        default:
            fs.readFile('404.html', 'utf-8', (err, data) => {
                if(err) {
                    res.writeHead(404);
                    res.write("Page not found");
                } else {
                    res.write(data);
                }
                res.end();
            });
    };
}).listen(8081);
