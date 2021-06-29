import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// nirasha
import SignUpGenereal from './components/signup-component/SignUpGeneral';




// nethmi
import Resercherpayment from './components/researcher-payment-component/payment';
import GetDetails from './components/viewconference-component/viewconference';
import ApproGeteditordetails from './components/approved-conferencedetails-component/approved';
import ApprovedResearchpaperdetails from './components/viewresearchpaper-component/viewresearchpaper';
import ApprovedProposaldetails from './components/viewproposal-component/viewproposal';





// kaveena
import AttendeePayment from './components/attendee-payment-component/Payment';
import ResearchPaperTable from './components/researchpapers-reviewer-component/ViewResearches';
import WorkshopProposalsTable from './components/workshopproposals-reviewer-component/ViewProposals';








// sanduni
import AddConferenceDetails from "./components/conference-editor-component/AddConferenceDetails";
import EditConferenceDetails from "./components/conference-editor-component/EditConferenceDetails";
import GetConferenceDetails from "./components/conference-editor-component/GetConfereneceDetails";
import FileUpload from "./components/admin-fileUpload-component/admin-fileUpload";
import Home from './components/home-component/home';






function App() {
  return (
    <Router>

      {/* sanduni */}
      <Route exact path='/addConferenceDetails' component = {AddConferenceDetails}/>
      <Route exact path='/edit/:id' component = {EditConferenceDetails}/>
      <Route exact path='/getConferenceDetails' component = {GetConferenceDetails}/>
      <Route exact path='/home' component = {Home}/>
      <Route exact path='/uploads' component = {FileUpload}/>




      {/* nirasha */}
      <Route path='/signup' component={SignUpGenereal} />





    
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />




      {/* //nethmi */}
      <Route  path="/account" component={Resercherpayment} />
      <Route  path="/retrieves" component={GetDetails} />
      <Route  path="/insert" component={ApproGeteditordetails} />
      <Route  path="/researchpaper" component={ApprovedResearchpaperdetails} />
      <Route  path="/proposal" component={ApprovedProposaldetails} />

    </Router>
  );
}

export default App;