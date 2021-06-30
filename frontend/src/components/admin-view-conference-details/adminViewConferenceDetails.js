import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function AdminConferenceDetails() { // admin view conference details function component

            const [conference, setConference] = useState([]) 
          
              useEffect(() => {
               
                axios
                  .get('http://localhost:5000/conference')  // get the details from mongo db
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
   
            };
  //return the view of table
   return(        
            <div>  
            <div className="container">               
            <div>
                <br/>
                  <h3 className = 'header2'>
                      <center>
                          <b> Retrieve Conference Details </b>
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
                      <th> Conference Topic Name</th>
                      <th> Author Name </th>
                      <th> Conference Type</th>                     
                      </tr>
                  </thead>
  
                  {conference.map((Conference) => (
                    <tr>
                      <td>{Conference.research_name}</td>
                      <td>{Conference.author_name}</td>
                      <td>{Conference.research_Type}</td>
  
                    </tr>
  
                  ))}
                  </table>
  
                </div>
                </div>
              </div>
              </div>
          );
}
