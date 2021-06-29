import React from 'react';
<<<<<<< Updated upstream
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DocumentUpload from './components/document-upload-component/DocumentUpload';
=======
import {BrowserRouter as Router, Route} from 'react-router-dom'

// nirasha
import SignUpGenereal from './components/signup-component/SignUpGeneral';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
      {/* nirasha */}
<<<<<<< Updated upstream
      <Route path='/documentUpload' component={DocumentUpload} />
=======
      <Route path='/signup' component={SignUpGenereal} />




    
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />





      {/* sanduni */}






>>>>>>> Stashed changes
    </Router>
  );
}

export default App;