import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';



export default function ApprovedReserchpaperdetails() { //implemented class component


  

  const [approvedResearches, setApprovedResearches] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/api/viewapprovedresearchpaper')
        .then((res) => {
           const approvedResearches = res.data;
           setApprovedResearches(approvedResearches);
        });
    }, []);

    
    

    

        return(


         
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Approved Research Paper Details </b>
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
                    <th> Title</th>
                    <th> Date </th>
                    <th> Name</th>
                    <th> Email</th>
                    
                    </tr>
                </thead>

                {approvedResearches.map((ApprovedResearcher) => (
                  <tr>
                    <td>{ApprovedResearcher.title}</td>
                    <td>{ApprovedResearcher.date}</td>
                    <td>{ApprovedResearcher.name}</td>
                    <td>{ApprovedResearcher.email}</td>
                    
                    

                    

                   

                  </tr>

                ))}
                </table>

              </div>
              </div>
            </div>
            </div>



        );
    }