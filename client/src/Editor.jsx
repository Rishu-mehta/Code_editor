
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
     
        // In a real-world scenario, you would send the code and language to a server
        // for compilation and receive the output.
        // For simplicity, I'll just set the output to the code here.
        const payload = {
          language ,
          code
        };
      try {
      const {data} = await axios.post("http://localhost:5000/run",payload)
        setOutput(data.output);
      } catch (error) {
        console.error('Compilation error:', error);
        setOutput('Compilation error. Please check your code and try again.');
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
