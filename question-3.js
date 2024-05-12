const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('I am Homepage.')
});

app.get('/about',(req,res)=>{
    res.send('I am About page.')
});

app.get('/contact',(req,res)=>{
    res.send('email:support@pwskills.com')
});



const PORT = 4002;
app.listen(PORT,()=>{
    console.log(`Server is running on port:${PORT}`);
});