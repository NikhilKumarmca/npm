// const os = require('os')
// console.log(os.freemem());

const express = require('express');

const app = express();
app.get('/',function(req,res){
    res.send('Hello world')
})

app.get('/student/:id',function(req,res){
    const id = req.params.id
    if (id==121)
    {
        res.send('welcome nikhil')
    }
    else if(id==122)
    {
        res.send('hey subham')
    }
    else
    {
        res.send('no data found')
    }
    
})

app.listen(9000, function(req,res){
    console.log('Running....');
});