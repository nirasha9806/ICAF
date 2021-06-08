import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DocumentUpload from './components/document-upload-component/DocumentUpload';

function App() {
  return (
    <Router>
      {/* nirasha */}
      <Route path='/documentUpload' component={DocumentUpload} />
    </Router>
  );
}

export default App;