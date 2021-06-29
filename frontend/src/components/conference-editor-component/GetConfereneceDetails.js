import React, {Component} from 'react';
import axios from 'axios';
// import TableRow from '../EditorTableRow-component/TableRow';
import { Link } from 'react-router-dom';

export default class GetConfereneceDetails extends Component{
  
    constructor(props){
        super(props);
            this.state={conference : []};
        }
       componentDidMount(){
            axios.get('http://localhost:5000/conference/index')
             .then(response=>{
                 this.setState({conference : response.data});

             })
             .catch(function(error){
                 console.log(error);
             })
        }
        tabRow(){
            return this.state.conference.map(function(object,i){
                // return <TableRow obj={object} key = {i}/>;
            });
        }
    
   
   
   
    render(){
        return (
            <div className="container">

        <div>
            <h3 align="center"> Event List</h3>
            <div
                  className='shadow p-6'
                  style={{ width: '75rem', marginLeft: '0px',backgroundColor:"#F0F8FF" }}
              ></div>
            {/* <table className="table table-striped" style={{marginTop:20}}> */}
            <table class="table table-hover">
                <thead className="table-active">
                    <tr>
                    <th> Research Name</th>
                    <th> Author Name </th>
                    <th> Research Type</th>
                    <th> Action</th>
                    </tr>
                    </thead>
                <tbody>
                    {this.tabRow()}
                </tbody>
            {/* </table> */}
            </table>
            <div>
                <Link className="btn grey" to="/">Back</Link>
            </div>
        </div>
        </div>
        
        );
    }
}

