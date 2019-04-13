const fs = require('fs')
const path = require('path')

// Create folder
/*
 fs.mkdir(path.join(__dirname, '/test'),{}, err => {
     if(err) throw err;
     console.log('Folder created....')
})
*/

// Create and Write to file
/*fs.writeFile(
    path.join(__dirname, '/test', 'hello.txt'), 
    'hello wolrd',
    err => {
        if (err) throw err;
        console.log('File written to....')
    
        //File append
        fs.appendFile(path.join(__dirname,'/test', 'hello.txt'),`\n I can do it.`, err =>{
            if(err) throw err;
            console.log('File written to...')
        })
    }
)
*/

// Read File
/*fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf-8', function(err, data){
    if(err) throw err;
    console.log(data)
})
*/

//Rename File
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloWorld.txt'), (err) => {
    if(err) throw err;
    console.log('File renamed...')
})
