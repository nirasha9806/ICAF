import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';




import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
import Landing from './components/landing-component/landing';
import DocumentUpload from './components/document-upload-component/DocumentUpload';
import Getdetails from './components/viewconference-component/viewconference';
import ApproGeteditordetails from './components/approved-conferencedetails-component/approved';
import DocumentUpload from './components/document-upload-component/DocumentUpload';





// nethmi
import Resercherpayment from './components/researcher-payment-component/payment';
import Getdetails from './components/viewconference-component/viewconference';
import ApproGeteditordetails from './components/approved-conferencedetails-component/approved';
import ApprovedResearchpaperdetails from './components/viewapprovedresearchpaper-component/viewapprovedresearchpaper';
import ApprovedProposaldetails from './components/viewapprovedproposal-component/viewapprovedproposal';
import Dashboard from './components/Dashboard-component/dashboard';




// kaveena

import AttendeePayment from './components/attendee-payment-component/Payment';
import ResearchPaperTable from './components/researchpapers-reviewer-component/ViewResearches';
import WorkshopProposalsTable from './components/workshopproposals-reviewer-component/ViewProposals';

function App() {
  return (
    <Router>


      {/* //nethmi     */}

      <Route  path="/account" component={Resercherpayment} />
      <Route  path="/retrieves" component={Getdetails} />
      <Route  path="/insert" component={ApproGeteditordetails} />
      <Route  path="/reserchpaper" component={ApprovedResearchpaperdetails} />
      <Route  path="/proposal" component={ApprovedProposaldetails} />
      <Route  path="/dashboard" component={Dashboard} />

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