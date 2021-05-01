import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';

function App() {
  return (

    <Router>
      
      <Route exact path="/attendee-payment-component" component={AttendeePayment} />

    </Router>
    
  );
}

export default App;
