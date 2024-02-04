const express = require('express');
const { generateFile } = require('./generatefile.js');
const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.get('/',(req,res)=>{
    return res.json({hello:"hi"})
})
app.post('/run',async (req,res)=>{
    // const language =req.body.language;
    // const code= req.body.code;

    const { language ="cpp", code } = req.body;
    if(code==undefined){
        return res.status(400).json({success:false , error:"Empty code body "})
    }
    const filepath = await generateFile(language ,code )
    return res.json({ filepath}); 
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})
