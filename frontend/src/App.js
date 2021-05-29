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
import DocumentUpload from './components/document-upload-component/DocumentUpload';


function App() {
  return (

    <Router>
      {/* //kaveena */}
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />
    
    
    
    
    

      {/* //nethmi     */}
      <Route exact path = '/approve' component = {Approve} />
    
    
    
  
    {/* //sanduni */}
     <Route exact path='/create' component = {Create}/>
     <Route exact path='/edit/:id' component = {Edit}/>
     <Route exact path='/index' component = {Index}/>
     <Route exact path='/landing' component = {Landing}/>





     {/* nirasha */}
     <Route path='/documentUpload' component={DocumentUpload}/>

    </Router>
    
    

  );
}

export default App;
