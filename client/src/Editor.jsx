
import React, { useState } from 'react';
import "./Editor.css"
import  axios from 'axios';
function Editor() {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');
    const [filename ,setFilename]= useState('');
  
    const handleCodeChange = (event) => {
      setCode(event.target.value);
    };
  
    const handlefilename =(e)=>{
      setFilename(e.target.value);
    }
  
    const handleCompile = async () => {
     
        const payload = {
          code,
          filename
        };
      try {
      const {data} = await axios.post("http://localhost:5000/run",payload)
        setOutput(data.output);
      } catch ({response}) {
       if(response){
        const errmsg= response.data.err.stderr;
        setOutput(errmsg);
       }
       else{
       setOutput("Failed to connect to server")
       }
      }
    };
  
    return (
      <div className="Editor">
       <div className="title-name"> <h1>Code Compiler</h1>
       </div>
        <div className="file-name">
          <label htmlFor="Filename">Filename
          <input type="text" name="" id="" onChange={handlefilename} required/>
          </label>
        </div>
        <div className='input-field'>
          <label>
            Enter Code:
            <textarea value={code} onChange={handleCodeChange} />
          </label>
        </div>
        <div>
          <button onClick={handleCompile}>Compile</button>
        </div>
        <div>
          <h2>Output:</h2>
          <pre>{output}</pre>
        </div>
      </div>
  )
}

export default Editor
