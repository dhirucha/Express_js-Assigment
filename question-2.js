const express = require('express');

const app = express();

//counter variable
let counter = 0;

//Route to send counter data
app.get('/',(req,res)=>{
    res.send(`Counter:${counter}`);
});

app.get('/increment',(req,res)=>{
    counter++;
    res.send(`Counter incremented:${counter}`)
});

app.get('/decrement',(req,res)=>{
    counter--;
    res.send(`Counter decremented:${counter}`)
});

const PORT = 4001;
app.listen(PORT,()=>{
    console.log(`server running on port:${PORT}`);
})