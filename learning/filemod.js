var fs = require('fs')


// ==========to read file===============
// fs.readFile('calc.js','utf8',function(err, data){
//     console.log(data);
// })


//===========to write file===============
// fs.writeFile('newcalc.js','console.log("done")',function(err){
//     console.log("file created");
// })

//===========to append file=============
// fs.appendFile('newcalc.js','\nconsole.log("new msg is here")',function(err){
//     console.log("added 1 line");
// })

//===========to delete file============
fs.unlink('newcalc.js',function(err){
    console.log("file deleted");
})