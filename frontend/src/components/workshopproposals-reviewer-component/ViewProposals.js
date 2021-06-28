import React, { useState, useEffect } from "react";
//import { Link } from 'react-router-dom';
import axios from "axios";
import "../../css/Papers.css";

export default function WorkshopProposalsTable() {
  
  const [workshopproposals, setWorkshopProposals] = useState([]); //gonna one item

  //get the all workshopproposals from database
  useEffect(() => {
    axios.get("http://localhost:5000/api/workshopProposal").then((res) => {
      let proposal = [];
      console.log(proposal);
      res.data.forEach((item) => {
        let obj = {
          name: item.name,
          email: item.email,
          title: item.proposal.title,
          date: item.proposal.date,
        };
        proposal.push(obj);
      });
      setWorkshopProposals(proposal);
    });
  }, []);

  const onSubmit = (WorkshopProposal) => {
    const obj = {
      title: WorkshopProposal.title,
      date: WorkshopProposal.date,
      name: WorkshopProposal.name,
      email: WorkshopProposal.email,
    };
    console.log(obj);

    axios
      .post(
        "http://localhost:5000/api/ApprovedProposals/insertApprovedProposals",
        obj
      )
      .then((response) => {
        console.log(obj);

        if (response.data.success) {
          alert("sucessfully approved");
        } else {
          alert("sucessfully not approved");
        }
      });
  };

  return (
    <div>
      <div className="container">
        <div>
          <br />
          <h3 className="header2">
            <center>
              <b> Workshop Proposal Details </b>
            </center>
          </h3>

          <br />
          <div
            className="shadow p-5"
            style={{
              width: "70rem",
              marginLeft: "0px",
              backgroundColor: "#F0F8FF",
            }}
          >
            <table className="table table-striped">
              <thead className="table-active">
                <tr>
                  <th> Paper Title</th>
                  <th> Date </th>
                  <th> Author Name</th>
                  <th> Email </th>
                  <th> View </th>
                  <th> Approve</th>
                  <th> Delete </th>
                </tr>
              </thead>

              {workshopproposals.map((WorkshopProposal) => (
                <tr>
                  <td>{WorkshopProposal.paperTitle}</td>
                  <td>{WorkshopProposal.date}</td>
                  <td>{WorkshopProposal.authorName}</td>
                  <td>{WorkshopProposal.email}</td>

                  <td>
                    <button className="btn btn-info btn-sm">
                      <i className="fas fa-file-pdf"></i> View Pdf
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => onSubmit(ResearchPaper)}
                    >
                      <i className="fas fa-edit"></i> Approve
                    </button>
                  </td>

                  <td>
                    <button className="btn btn-danger btn-sm">
                      <i className="fas fa-trash"></i> Decline
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
