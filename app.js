const express = require('express');
const port =3001;
const app = express();

app.get('/',(req, res)=>{
    console.log('hello guys...');
    return res.send('welcome');
});

// es5, es6, es10

// const, let  , function add(){ }

app.get('/welcome', function (req, res){
    console.log('Node.js steps.... ');
    const x = 401+600;
    return res.send(`result : ${x}`);
});

app.listen(port, function (){

    console.log('server listening on port : ', port);
});