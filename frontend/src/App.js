import './App.css';
import React, {Component} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Approve from './components/Approving-component/approving';
//
class App extends Component{

  render(){
    return(

      <Router>

        <Switch>
          
          <Route exact path = '/approve' component = {Approve} />
          
        </Switch>
        
      </Router>

    );
  }
}





export default App;
