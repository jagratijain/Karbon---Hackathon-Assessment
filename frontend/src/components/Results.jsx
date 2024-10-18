// src/components/Results.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

function Results({ results }) {
  const navigate = useNavigate();

  if (!results) {
    navigate('/');
    return null;
  }

  const { metadata = {}, flags = {} } = results;

  const getFlagColor = (value) => {
    return value === 'PASS' ? 'text-green-600' : 'text-red-600';
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Analysis Results</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Metadata</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm">
              <span className="font-medium">Timestamp:</span> {' '}
              {new Date(metadata.timestamp).toLocaleString() || 'N/A'}
            </p>
            <p className="text-sm">
              <span className="font-medium">File:</span> {' '}
              {metadata.filename || 'N/A'}
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Analysis Flags</h3>
          <div className="space-y-2">
            {Object.entries(flags).map(([key, value]) => (
              <div key={key} className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <span className="font-medium">
                    {key.split('_').join(' ')}:
                  </span>{' '}
                  <span className={getFlagColor(value)}>
                    {value || 'N/A'}
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Analyze Another File
        </button>
      </div>
    </div>
  );
}

export default Results;