
import React, { useState } from 'react';
import "./Editor.css"
import  axios from 'axios';
function Editor() {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('cpp');
    const [output, setOutput] = useState('');
  
    const handleCodeChange = (event) => {
      setCode(event.target.value);
    };
  
    const handleLanguageChange = (event) => {
      setLanguage(event.target.value);
    };
  
    const handleCompile = async () => {
     
        const payload = {
          language ,
          code
        };
      try {
      const {data} = await axios.post("http://192.168.1.20:5000/run",payload)
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
        <div>
          <label>
            Select Language:
            <select value={language} onChange={handleLanguageChange}>
              <option value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="Java">Java</option>
              <option value="cpp">cpp</option>
            </select>
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
