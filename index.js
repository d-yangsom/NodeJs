/*const Person = require('./person');
const person1 = new Person('Dre Dreamz', 31);
person1.greeting()
*/

/* Logger
const Logger = require('./logger')
const logger = new Logger()

logger.on('message', (data) => console.log('Called Listener',data))

logger.log('Hello world')
logger.log('Hi')
logger.log('Hello')
*/
/*
Called Listener { id: 'c3dbb46b-fff7-4cac-a359-2fae8197de49', msg: 'Hello world' }
Called Listener { id: '4d6015d4-972d-4216-a846-2d0410b4d518', msg: 'Hi' }
Called Listener { id: 'ce77c4e3-2321-4a50-b471-347e16c8d216', msg: 'Hello' }
*/

const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer((req, res) => {
/*
 if(req.url === '/'){
    fs.readFile(path.join(__dirname, 'public', 'index.html'),(err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(content)
    })
 }
 if(req.url === '/about.html'){
    fs.readFile(path.join(__dirname, 'public', 'about.html'),(err, content) => {
        if(err) throw err;
        res.writeHead(200, {'Content-Type':'text/html'})
        res.end(content)
    })
 }
 if (req.url === '/api/users'){
    const users = [
        { name:'Dre Dreamz', age: 32},
        { name:'Newclear Love', age: 31}
    ]
    res.writeHead(200, { 'Content-Type':'application.json' })
    res.end(JSON.stringify(users))
 }
 */

 // Build file path
 let filePath = path.join(__dirname, 
    'public', 
    req.url === '/' ? 'index.html' : req.url
)

 //Extension of file
 let extname = path.extname(filePath)

 //Inital content type
 let contentType = 'text/html'

 //Check ext and set content type
 switch(extname) {
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.css':
        contentType = 'text/css';
        break;
    case '.json':
        contentType = 'applcation/json';
        break;
    case '.png':
        contentType = 'image/png';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
 }

 //Read File
 fs.readFile(filePath, (err, content) => {
     if(err) {
         if(err.code == 'ENOENT') {
             //Page not found
             fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
                 res.writeHead(200, { 'Content-Type':'text/html'})
                 res.end(content, 'utf-8')
             })
         } else {
             //Some server error
             res.writeHead(500)
             res.end(`Server Error: ${err.code}`)
         }
     } else {
         // Success
         res.writeHead(200, { 'Content-Type': contentType })
         res.end(content, 'utf-8')
     }
 })
})
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`))