const express = require('express');
const { generateFile } = require('./generatefile.js');
const {executeCpp} = require('./executeCpp.js');
const cors = require ('cors');



const app =express();
app.use(cors());
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
    try{
    const filepath = await generateFile(language ,code )
    const output = await executeCpp(filepath)
    return res.json({ filepath , output});
    }
    catch (err){
        res.status(500).json({err});
    } 
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})
