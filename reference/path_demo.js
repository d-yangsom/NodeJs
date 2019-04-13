//Path Directory
const path = require('path')

//Base file name  
console.log(path.basename(__filename)) ///Users/Mac/Desktop/NodeJs/reference/path_demo.js

//Directory name
console.log(path.dirname(__filename)) ///Users/Mac/Desktop/NodeJs/reference

// File extension
console.log(path.extname(__filename)) //.js

//Create path object
console.log(path.parse(__filename))
/* 
{ root: '/',
  dir: '/Users/Mac/Desktop/NodeJs/reference',
  base: 'path_demo.js',
  ext: '.js',
  name: 'path_demo' }
*/

//Concatenate paths

console.log(path.join(__dirname, 'test', 'hello.html'))