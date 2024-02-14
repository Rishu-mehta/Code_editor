import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Editor from './Editor';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Editor />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
