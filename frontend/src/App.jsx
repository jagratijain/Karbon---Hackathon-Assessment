// src/App.jsx
import React, { useState } from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import FileUpload from './components/FileUpload';
import Results from './components/Results';
import Navbar from './components/Navbar'; // Import Navbar

function App() {
  const [results, setResults] = useState(null);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-200 to-purple-300"> {/* Lighter Gradient */}
        <Navbar /> {/* Use Navbar here */}
        
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-8"> {/* Changed text color */}
            Financial Data Analyzer
          </h1>
          
          <Routes>
            <Route 
              path="/" 
              element={<FileUpload setResults={setResults} />} 
            />
            <Route 
              path="/results" 
              element={<Results results={results} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
