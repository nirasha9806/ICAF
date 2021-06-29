import React, {Component} from 'react';
import axios from 'axios';

import Data1 from '../getinserteditordetails-component/getinsertdetails';
import { Link } from 'react-router-dom';


export default class Index2 extends Component{
  
    constructor(props){
        super(props);
            this.state={editorDetails : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/api/getinserteditordetails')
             .then(response=>{
                 this.setState({editorDetails : response.data});

                 //insert data

                 

             })
             .catch(function(error){
                 console.log(error);
             })
        }
        tabRow(){
            return this.state.editorDetails.map(function(object,i){
                return <Data1 obj={object} key = {i}/>;
            });
        }
    
   
   
   
    render(){
        return (
        <div>
            <h3 align="center"> Approve Details of the Editors</h3>
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