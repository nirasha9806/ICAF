import React, {Component} from 'react';
import axios from 'axios';
import TableRow from '../tableRow-component/TableRow';
import { Link } from 'react-router-dom';

export default class GetConferenceDetails extends Component{ // get editor conference details in this component
  
    constructor(props){
        super(props);
            this.state={conference : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/conference') // get the conference details from mongo db
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
//get the view of table  
    render(){
        return (
            <div className="container">
        <div>
            <h3 align="center"> Event List</h3>
            <div
                  className='shadow p-6'
                  style={{ width: '75rem', marginLeft: '0px',backgroundColor:"#F0F8FF" }}
              ></div>
            <table class="table table-hover">
                <thead className="table-active">
                    <tr>
                    <th> Conference Topic Name</th>
                    <th> Author Name </th>
                    <th> Conference Type</th>
                    <th> Action</th>
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
        </div>
        
        );
    }
}

