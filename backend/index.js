const express = require('express');
const { generateFile } = require('./generatefile.js');
const {executeCpp} = require('./executeCpp.js');
const cors = require ('cors');
const {executePy} = require('./executePy.js');
const { executeJs} = require ('./executeJs.js')

const app =express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json()); 

app.get('/',(req,res)=>{
    return res.json({hello:"hi"})
})
app.post('/run',async (req,res)=>{

    const { language , code } = req.body;
    console.log(language);
    if(code==undefined){
        return res.status(400).json({success:false , error:"Empty code body "})
    }
    try{
    const filepath = await generateFile(language ,code );
    let output;
    if (language==="cpp"){
    output = await executeCpp(filepath);
    }
    else if(language==="python"){
    output = await executePy(filepath);

    }
    else if (language==="javascript"){
    output = await executeJs(filepath);
    }
    return res.json({ filepath , output});
    }
    catch (err){
        res.status(500).json({err});
    } 
})

app.listen(5000,()=>{
    console.log("listening on 5000")
})
