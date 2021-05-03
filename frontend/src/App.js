import logo from './logo.svg';
import './App.css';
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import {BrowserRouter as Router, Route} from 'react-router-dom'
//import 'bootstrap/dist/css/bootstrap.min.css';

import AttendeePayment from './components/attendee-payment-component/attendee-payment-component';
import Approve from './components/Approving-component/approving';
import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';
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




     {/* nirasha */}
     <Route path='/documentUpload' component={DocumentUpload}/>

    </Router>
    
>>>>>>> Stashed changes
  );
}

export default App;
