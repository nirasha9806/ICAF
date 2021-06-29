import React, { useState, useEffect } from 'react';
//import { Link } from 'react-router-dom';
import axios from 'axios';



export default function Geteditordetails() { //implemented class component


  

  const [editorDetails, setEditorDetails] = useState([]) //gonna one item

    //get the all workshopproposals from database
    useEffect(() => {
     
      axios
        .get('http://localhost:5000/api/getinserteditordetails')
        .then((res) => {
           const editorDetails = res.data;
           setEditorDetails(editorDetails);
        });
    }, []);

    
    const Delete = (id) => {
        axios.post('http://localhost:5000/api/getinserteditordetails/delete/'+id)
        .then(response =>{
            alert("successfully deleted")
           
        })
    }

    

        return(


         
          <div>


          <div className="container">

              
          <div>
              <br/>
                <h3 className = 'header2'>
                    <center>
                        <b> Approve Editor Details </b>
                    </center>
                </h3>


                <br/>
              <div
                  className='shadow p-5'
                  style={{ width: '75rem', marginLeft: '0px', backgroundColor:"#F0F8FF" }}
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

                {editorDetails.map((EditorDetails) => (
                  <tr>
                    <td>{EditorDetails.research_name}</td>
                    <td>{EditorDetails.author_name}</td>
                    <td>{EditorDetails.research_Type}</td>
                    
                    

                    <td>
                      <button className="btn btn-danger" 
                    onClick={() =>Delete(EditorDetails._id)}><i className="fas fa-edit"></i> Delete
                      
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