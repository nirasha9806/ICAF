import React, { useState, useEffect } from 'react';

import axios from 'axios';



export default function Getdetails() { //implemented class component


  

  const [conference, setConference] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/conference')
        .then((res) => {
           const conference = res.data;
          setConference(conference);
        });
    }, []);

    const onSubmit = (e) => {

      console.log(e);
      const obj = {
        research_name: e.research_name,
        author_name: e.author_name,
        research_Type: e.research_Type,
       
      };
  console.log(obj);

      axios
        .post('http://localhost:5000/api/inserteditordetails/add', obj)
        .then((response) => {
          if (response.data.success) {
            alert('Successfully Added');
          } else {
            alert('Please Try Again !!');
          }
        });
    };
      
   

    

        return(


         
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Retrieve Editor Details </b>
                    </center>
                </h3>


                <br/>
              <div
                  className='shadow p-5'
                  style={{ width: '75rem', marginLeft: '0px' ,backgroundColor:"#F0F8FF" }}
              >
                <table className="table table-striped">
                <thead className="table-active">
                    <tr>
                    <th> Research Name</th>
                    <th> Author Name </th>
                    <th> Research Type</th>
                    <th> Action</th>
                    
                    </tr>
                </thead>

                {conference.map((Conference) => (
                  <tr>
                    <td>{Conference.research_name}</td>
                    <td>{Conference.author_name}</td>
                    <td>{Conference.research_Type}</td>
                    
                    

                    <td>
                      <button className="btn btn-warning btn-sm" onClick={() =>
                    onSubmit(Conference)}><i className="fas fa-edit"></i> Approve
                      
                      </button>
                    </td>

                   

                  </tr>

                ))}
                </table>

              </div>
              </div>
            </div>
            </div>



        );
    }