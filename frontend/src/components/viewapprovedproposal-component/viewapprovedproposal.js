import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';



export default function ApprovedProposaldetails() { //implemented class component


  

  const [approvedProposals, setApprovedProposals] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/api/viewapprovedproposal')
        .then((res) => {
           const approvedProposals = res.data;
           setApprovedProposals(approvedProposals);
        });
    }, []);

    
    

    

        return(


         
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Approved Proposal Details </b>
                    </center>
                </h3>


                <br/>
              <div
                  className='shadow p-5'
                  style={{ width: '65rem', marginLeft: '0px', backgroundColor:"#F0F8FF" }}
              >
                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th> Name</th>
                    <th> Email </th>
                    
                   
                    
                    </tr>
                </thead>

                {approvedProposals.map((ApprovedProposals) => (
                  <tr>
                    <td>{ApprovedProposals.name}</td>
                    <td>{ApprovedProposals.email}</td>
                   
                    
                    
                    

                    

                   

                  </tr>

                ))}
                </table>

              </div>
              </div>
            </div>
            </div>



        );
    }