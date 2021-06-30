import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
//import { Link } from 'react-router-dom';
import axios from "axios";
import "../../css/Papers.css";

export default function ResearchPaperTable() {
  //implemented class component

  const [researchpapers, setResearchPapers] = useState([]); //gonna one item

  //get the all researchpapers from database
  useEffect(() => {
    axios.get("http://localhost:5000/api/researchPaper").then((res) => {
      let researchPaper = [];
      console.log(researchPaper);
      res.data.forEach((item) => {
        let obj = {
          id: item._id,
          name: item.name,
          email: item.email,
          title: item.researchPaper.title,
          date: item.researchPaper.date,
        };
        researchPaper.push(obj);
      });

      setResearchPapers(researchPaper);
    });
  }, []);

  //Delete Method
  const Delete = (id) => {
    console.log(id);
    axios
      .post("http://localhost:5000/api/researchPaper/delete/" + id)
      .then((response) => {
        alert("Successfully Deleted !");
        window.location = "/researchPapers";
      });
  };

  const onSubmit = (ResearchPaper) => {
    const obj = {
      title: ResearchPaper.title,
      date: ResearchPaper.date,
      name: ResearchPaper.name,
      email: ResearchPaper.email,
    };
    console.log(obj);

    axios
      .post(
        "http://localhost:5000/api/ApprovedResearcher/insertApprovedResearcher",
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

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_l4g7ber",
        "template_l0itd1s",
        e.target,
        "user_4L6ev1ZDXMBYB5Q3nYt1t"
      )
      .then((res) => {
        console.log(res);
        alert("Successfully Sent Email !");
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <div className="container">
        <div>
          <br />
          <h3 className="header2">
            <center>
              <b>Research Paper Details </b>
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
            <form
              className="row"
              style={{ marginLeft: "300px", width: "25rem" }}
              onSubmit={sendEmail}
            >
              <input
                style={{ width: "25rem" }}
                type="email"
                class="form-control"
                name="user_email"
                placeholder="abc@gmail.com"
              />
              <input
                className="btn btn-primary btn-sm"
                type="submit"
                value="Send Email"
                style={{
                  marginLeft: "125px",
                  marginTop: "20px",
                  width: "10rem",
                }}
              />
            </form>

            <br />

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

              {researchpapers.map((ResearchPaper) => (
                <tr>
                  <td>{ResearchPaper.title}</td>
                  <td>{ResearchPaper.date}</td>
                  <td>{ResearchPaper.name}</td>
                  <td>{ResearchPaper.email}</td>

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
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => Delete(ResearchPaper.id)}
                    >
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
