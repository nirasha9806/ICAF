import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// nirasha
import SignUpGenereal from './components/signup-component/SignUpGeneral';




// nethmi
import Resercherpayment from './components/researcher-payment-component/payment';
import GetDetails from './components/viewconference-component/viewconference';
import ApproGeteditordetails from './components/approved-conferencedetails-component/approved';
import ApprovedResearchpaperdetails from './components/viewapprovedresearchpaper-component/viewapprovedresearchpaper';
import ApprovedProposaldetails from './components/viewapprovedproposal-component/viewapprovedproposal';
import Dashboard from './components/Dashboard-component/dashboard';





// kaveena
import AttendeePayment from './components/attendee-payment-component/Payment';
import ResearchPaperTable from './components/researchpapers-reviewer-component/ViewResearches';
import WorkshopProposalsTable from './components/workshopproposals-reviewer-component/ViewProposals';








// sanduni
import AddConferenceDetails from "./components/conference-editor-component/AddConferenceDetails";
import EditConferenceDetails from "./components/conference-editor-component/EditConferenceDetails";
import GetConferenceDetails from "./components/conference-editor-component/GetConfereneceDetails";
import AdminConferenceDetails from "./components/admin-view-conference-details/adminViewConferenceDetails";
import FileUpload from "./components/admin-fileUpload-component/admin-fileUpload";
import Home from './components/home-component/home';






function App() {
  return (
    <Router>

      {/* sanduni */}
      <Route exact path='/addConferenceDetails' component = {AddConferenceDetails}/>
      <Route exact path='/edit/:id' component = {EditConferenceDetails}/>
      <Route exact path='/getConferenceDetails' component = {GetConferenceDetails}/>
      <Route exact path='/' component = {Home}/>
      <Route exact path='/adminConferenceDetails' component = {AdminConferenceDetails}/>
      <Route exact path='/uploads' component = {FileUpload}/>




      <Route  path="/account" component={Resercherpayment} />
      <Route  path="/retrieves" component={Getdetails} />
      <Route  path="/insert" component={ApproGeteditordetails} />
      <Route  path="/reserchpaper" component={ApprovedResearchpaperdetails} />
      <Route  path="/proposal" component={ApprovedProposaldetails} />
      <Route  path="/dashboard" component={Dashboard} />


      {/* nirasha */}
      <Route path='/signup' component={SignUpGenereal} />





    
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />


    </Router>
  );
}

export default App;