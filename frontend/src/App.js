import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
import Approve from './components/Approving-component/approving';
import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
import Landing from './components/landing-component/landing';
import DocumentUpload from './components/document-upload-component/DocumentUpload';
import Data from './components/retrieveeditordata-component/fetcheditordata';
import Index1 from './components/retrieveeditordetailstable-component/fetcheditortable';
import Index2 from './components/getinserteditordetailstable-component/getinsertdetailstable';


function App() {
  return (

    <Router>
      
      {/* //kaveena */}
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />


      {/* //nethmi     */}
     
      <Route exact path = '/approve' component = {Approve} />
      <Route exact path = '/fetch' component = {Data} />
      <Route exact path = '/retrieve' component = {Index1} />
      <Route exact path = '/took' component = {Index2} />

    </Router>
    
  );
}





export default App;
