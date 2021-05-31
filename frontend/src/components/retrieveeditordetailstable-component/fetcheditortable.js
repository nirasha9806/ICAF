import React, {Component} from 'react';
import axios from 'axios';

import Data from '../retrieveeditordetails-component/fetcheditordata';
import { Link } from 'react-router-dom';


export default class Index1 extends Component{
  
    constructor(props){
        super(props);
            this.state={conference : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/conference')
             .then(response=>{
                 this.setState({conference : response.data});

                 //insert data

                 

             })
             .catch(function(error){
                 console.log(error);
             })
        }
        tabRow(){
            return this.state.conference.map(function(object,i){
                return <Data obj={object} key = {i}/>;
            });
        }
    
   
   
   
    render(){
        return (
        <div>
            <h3 align="center"> Details of the Editors</h3>
            <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Author Name</th>
                        <th>Event Type</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <div>
                
            </div>
        </div>
        
        );
    }
}