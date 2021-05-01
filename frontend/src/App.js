import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
import Approve from './components/Approving-component/approving';

function App() {
  return (

    <Router>
      //kaveena
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />
    
    
    
    
    
    
      //nethmi    
      <Route exact path = '/approve' component = {Approve} />

    </Router>
    
  );
}





export default App;
