
import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [output, setOutput] = useState('');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleCompile = async () => {
    try {
      // In a real-world scenario, you would send the code and language to a server
      // for compilation and receive the output.
      // For simplicity, I'll just set the output to the code here.
      setOutput(code);
    } catch (error) {
      console.error('Compilation error:', error);
      setOutput('Compilation error. Please check your code and try again.');
    }
  };

  return (
    <div className="App">
      <h1>Code Compiler</h1>
      <div>
        <label>
          Select Language:
          <select value={language} onChange={handleLanguageChange}>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            {/* Add more language options as needed */}
          </select>
        </label>
      </div>
      <div>
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
  );
};

export default App;
