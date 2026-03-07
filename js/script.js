const express = require('express');
const app =express();

const userModel = require("./userModel.js");

app.get('/', (req , res)=>{
    res.send("hey");
})

app.get('/create',async (req , res)=>{
     let created = await userModel.create({
        name : "siddiq",
        email :"example@gmail.com",
        username :"siddiq"
        
    })
      res.send(created);
})

app.get('/update',async (req , res)=>{
     let updated = await userModel.findOneAndUpdate({username:"siddiq"},{name:"coder"},  { new: true })
    res.send(updated);
})

app.get('/read',async (req , res)=>{
     let read = await userModel.find({username : "siddiq"});
    res.send (read);
})
app.get('/delete',async (req , res)=>{
     let dele = await userModel.findOneAndDelete({username:"siddiq"})
    res.send (dele);
})
app.listen(5000);