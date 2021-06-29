import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/AttendeePayment.css';

export default class ResearchPaperTable extends Component { //implemented class component

    constructor(props) {
        super(props);
    
        this.state = {
          researchpapers: [],
        } //gonna one item
    }

    //get the all researchpapers from database
    componentDidMount() {
      axios.get('http://localhost:5000/api/researchPaperTable')
        .then(res => {
          const researchpapers = res.data;
          this.setState({ researchpapers });
        })
    }
    //delete method
    delete(id) {
      axios.post('http://localhost:5000/api/researchPaperTable/delete/'+id)
        .then(response => {
          this.componentDidMount();
    });
    }


    render() {
        return(
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b>CHECKOUT !</b>
                    </center>
                </h3>


                <br/>

                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th> Paper Title</th>
                    <th> Date </th>
                    <th> Author Name</th>
                    <th> Email </th>
                    <th> Approve</th>
                    <th> Decline</th>
                    </tr>
                </thead>

                { this.state.researchpapers.map(ResearchPaper =>
                  <tr>
                    <td>{ResearchPaper.paperTitle}</td>
                    <td>{ResearchPaper.date}</td>
                    <td>{ResearchPaper.authorName}</td>
                    <td>{ResearchPaper.email}</td>
                    

                    <td>
                      <button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i> Approve
                      
                      </button>
                    </td>

                    <td>
                    <button className="btn btn-danger btn-sm" 
                     onClick={ event => window.confirm("Are you sure you want to delete this paper details?")
                     && this.delete(ResearchPaper._id)}><i className="fas fa-trash"></i> 
                     Decline 
                     </button>
                    </td>

                  </tr>

                )}
                </table>

              </div>
              </div>

            </div>



        )
    }
}