import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// nirasha
import SignUpGenereal from './components/signup-component/SignUpGeneral';




// nethmi
import Data from './components/retrieveeditordata-component/fetcheditordata';
import Index1 from './components/retrieveeditordetailstable-component/fetcheditortable';
import Index2 from './components/getinserteditordetailstable-component/getinsertdetailstable';
import Getdetails from './components/viewconference-component/viewconference';
import ApproGeteditordetails from './components/approved-conferencedetails-component/approved';





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


      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />





      {/* sanduni */}
      <Route exact path='/addConferenceDetails' component = {AddConferenceDetails}/>
      <Route exact path='/edit/:id' component = {EditConferenceDetails}/>
      <Route exact path='/getConferenceDetails' component = {GetConferenceDetails}/>
<<<<<<< Updated upstream
      <Route exact path='/home' component = {Home}/>
=======
      <Route exact path='/' component = {Home}/>
      <Route exact path='/adminConferenceDetails' component = {AdminConferenceDetails}/>
>>>>>>> Stashed changes
      <Route exact path='/uploads' component = {FileUpload}/>




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