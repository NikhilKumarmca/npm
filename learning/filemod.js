var fs = require('fs')

fs.readFile('calc.js','utf8',function(err, data){
    console.log(data);
})

fs.writeFile('newcalc.js','console.log("done")',function(err){
    console.log("file created");
})