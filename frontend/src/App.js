import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
import Approve from './components/Approving-component/approving';
import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
import Landing from './components/landing-component/landing';
import FileUpload from './components/admin-fileUpload-component/fileUpload';
import DocumentUpload from './components/document-upload-component/DocumentUpload';


<<<<<<< Updated upstream
=======


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
import FileUpload from "./components/admin-fileUpload-component/admin-fileUpload";
import Home from './components/home-component/home';





>>>>>>> Stashed changes
function App() {
  return (

    <Router>
      {/* //kaveena */}
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />
    
    
    
    
    

      {/* //nethmi     */}
      <Route exact path = '/approve' component = {Approve} />
    
<<<<<<< Updated upstream
    
    
  
    {/* //sanduni */}
     <Route exact path='/create' component = {Create}/>
     <Route exact path='/edit/:id' component = {Edit}/>
     <Route exact path='/index' component = {Index}/>
     <Route exact path='/landing' component = {Landing}/>
     <Route exact path='/uploads' component = {FileUpload}/>

=======
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />





      {/* sanduni */}
      <Route exact path='/addConferenceDetails' component = {AddConferenceDetails}/>
      <Route exact path='/edit/:id' component = {EditConferenceDetails}/>
      <Route exact path='/getConferenceDetails' component = {GetConferenceDetails}/>
      <Route exact path='/home' component = {Home}/>
      <Route exact path='/uploads' component = {FileUpload}/>
>>>>>>> Stashed changes




     {/* nirasha */}
     <Route path='/documentUpload' component={DocumentUpload}/>

    </Router>
    
    

  );
}

export default App;
