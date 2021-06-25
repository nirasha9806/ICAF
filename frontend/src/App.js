import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import DocumentUpload from './components/document-upload-component/DocumentUpload';
import AttendeePayment from './components/attendee-payment-component/Payment';
import ResearchPaperTable from './components/researchpapers-reviewer-component/ViewResearches';
import WorkshopProposalsTable from './components/workshopproposals-reviewer-component/ViewProposals';

function App() {
  return (
    <Router>
      {/* nirasha */}
      <Route path='/documentUpload' component={DocumentUpload} />
    
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />
        
    </Router>
  );
}

export default App;