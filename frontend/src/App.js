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






function App() {
  return (
    <Router>


      {/* //nethmi     */}
      <Route exact path = '/fetch' component = {Data} />
      <Route exact path = '/retrieve' component = {Index1} />
      <Route exact path = '/took' component = {Index2} />
      <Route  path="/retrieves" component={Getdetails} />
      <Route  path="/insert" component={ApproGeteditordetails} />





      {/* nirasha */}
      <Route path='/signup' component={SignUpGenereal} />





    
      {/* //kaveena */}
      <Route  path="/attendeePayment" component={AttendeePayment} />
      <Route  path="/researchPapers" component={ResearchPaperTable} />
      <Route  path="/workshopProposals" component={WorkshopProposalsTable} />





      {/* sanduni */}







    </Router>
  );
}

export default App;