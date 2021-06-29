import React, {Component} from 'react';
import axios from 'axios';
import TableRow from '../tableRow-component/TableRow';
import { Link } from 'react-router-dom';

export default class Index extends Component{
  
    constructor(props){
        super(props);
            this.state={conference : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/conference')
             .then(response=>{
                 this.setState({conference : response.data});

             })
             .catch(function(error){
                 console.log(error);
             })
        }
        tabRow(){
            return this.state.conference.map(function(object,i){
                return <TableRow obj={object} key = {i}/>;
            });
        }
    
   
   
   
    render(){
        return (
        <div>
            <h3 align="center"> Event List</h3>
            <table className="table table-striped" style={{marginTop:20}}>
                <thead>
                    <tr>
                        <th>Event Name</th>
                        <th>Author Name</th>
                        <th>Event Type</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            </table>
            <div>
                <Link className="btn grey" to="/">Back</Link>
            </div>
        </div>
        
        );
    }
}