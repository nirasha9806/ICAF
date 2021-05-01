import React, {Component}from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

import Create from './components/create-component/create';
import Edit from './components/edit-component/edit';
import Index from './components/index-component/index';

class App extends Component{
  render(){
    return (
      <Router>
        
          <Switch>
            <Route exact path='/create' component = {Create}/>
            <Route exact path='/edit/:id' component = {Edit}/>
            <Route exact path='/index' component = {Index}/>
          </Switch>
      
      </Router>
    );
  }
}
export default App;
