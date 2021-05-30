import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
<<<<<<< Updated upstream
=======
import ResearchPaperTable from './components/researchPaperTable-component/researchPaperTable-component';
import Approve from './components/Approving-component/approving';
import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
import Landing from './components/landing-component/landing';
import DocumentUpload from './components/document-upload-component/DocumentUpload';

>>>>>>> Stashed changes

function App() {
  return (

    <Router>
      
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />
<<<<<<< Updated upstream
=======
      <Route exact path="/researchPaperTable-component" component={ResearchPaperTable} />
    
    
    
    

      {/* //nethmi     */}
      <Route exact path = '/approve' component = {Approve} />
    
    
    
  
    {/* //sanduni */}
     <Route exact path='/create' component = {Create}/>
     <Route exact path='/edit/:id' component = {Edit}/>
     <Route exact path='/index' component = {Index}/>
     <Route exact path='/landing' component = {Landing}/>





     {/* nirasha */}
     <Route path='/documentUpload' component={DocumentUpload}/>
>>>>>>> Stashed changes

    </Router>
    
  );
}

export default App;
