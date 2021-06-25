import React, {  useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';
import '../../css/AttendeePayment.css';


export default function WorkshopProposalsTable () { //implemented class component

  const [workshopproposals, setWorkshopProposals] = useState([]); //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
      axios.get('http://localhost:5000/api/workshopProposals').then((res) => {
        const workshopProposal = res.data;
        setWorkshopProposals(workshopProposal);
      });
    }, []); 

    //Delete Method
    const Delete = (id) => {
    axios
      .post('http://localhost:5000/api/workshopProposals/delete/' + id)
      .then((response) => {
        alert('Successfully Deleted !');
      });
    };

        return(
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Workshop Proposal Details </b>
                    </center>
                </h3>


                <br/>
              <div
                  className='shadow p-5'
                  style={{ width: '75rem', marginLeft: '0px' }}
              >
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

                { workshopproposals.map(WorkshopProposal =>
                  <tr>
                    <td>{WorkshopProposal.paperTitle}</td>
                    <td>{WorkshopProposal.date}</td>
                    <td>{WorkshopProposal.authorName}</td>
                    <td>{WorkshopProposal.email}</td>
                    

                    <td>
                      <button className="btn btn-warning btn-sm"><i className="fas fa-edit"></i> Approve
                      
                      </button>
                    </td>

                    <td>
                    <button className="btn btn-danger btn-sm" 
                     onClick={ event => window.confirm("Are you sure you want to delete this paper details?")
                     && Delete(WorkshopProposal._id)}><i className="fas fa-trash"></i> 
                     Decline 
                     </button>
                    </td>

                  </tr>

                )}
                </table>

              </div>
              </div>
            </div>
            </div>



        );
    }