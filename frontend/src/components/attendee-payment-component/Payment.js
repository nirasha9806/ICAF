import React, { useState } from "react";
import "../../css/AttendeePayment.css";
import axios from "axios";

export default function AttendeePayment() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [radio1, setRadio1] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [code, setCode] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = () => {
    const Payment = {
      name: name,
      email: email,
      radio1: radio1,
      number: number,
      date: date,
      code: code,
      amount: amount,
    };

    axios
      .post("http://localhost:5000/api/payment/insertPayment", Payment)
      .then((response) => {
        console.log(response.data);
        alert("Payment Details Added Successfully!");
      });
  };

  const onChangeName = (e) => {
    console.log(e.target.value);
    setName(e.target.value); //target is textbox and value is textbox value
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeRadio1 = (e) => {
    setRadio1(e.target.value);
  };

  const onChangeNumber = (e) => {
    setNumber(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onChangeAmount = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="App">
      <br />
      <br />

      <center>
        <h2 className="header2">Attendee Payment </h2>
      </center>

      <center>
        <h4> Payment Details Form </h4> <p></p>
      </center>

      <div
        className="shadow p-5"
        style={{ width: "35rem", marginLeft: "400px" }}
      >
        <div class="card-header">
          <b>
            <center>Payment Information</center>
          </b>
        </div>
        <br />
        <center>
          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="" required style={{ color: "blue" }}>
              Attendee Name *{" "}
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                value={name}
                onChange={(e) => onChangeName(e)}
                placeholder="enter name"
              />
            </div>
          </div>

          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="email" required style={{ color: "blue" }}>
              Attendee Email address *
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                name="email"
                placeholder="enter email"
                value={email}
                onChange={(e) => onChangeEmail(e)}
                id="email"
              />
            </div>
            <small id="emailHelp" class="form-text text-muted">
              {" "}
              We'll never share your email with anyone else.
            </small>
          </div>

          <div className="form-group">
            <label style={{ color: "blue" }}>Event Type *</label> <br />
            <input
              type="radio"
              name="radio1"
              value="Research Paper Presentation"
              required
              checked={radio1 === "Research Paper Presentation"}
              onChange={(e) => onChangeRadio1(e)}
            />{" "}
            Research Paper Presentation <br />
            <input
              type="radio"
              name="radio1"
              value="Workshop"
              required
              checked={radio1 === "Workshop"}
              onChange={(e) => onChangeRadio1(e)}
            />{" "}
            Workshop <br />
          </div>

          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="" required style={{ color: "blue" }}>
              Payment Amount *
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                value={amount}
                onChange={(e) => onChangeAmount(e)}
                placeholder="enter amount"
              />
            </div>
          </div>

          <div className="card-body">
            <div class="card-header">
              <b>
                <center>Payment Method</center>
              </b>
            </div>
          </div>

          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="" required style={{ color: "blue" }}>
              Card Number *
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                value={number}
                onChange={(e) => onChangeNumber(e)}
                placeholder="0000 0000 0000 0000"
              />
            </div>
          </div>

          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="" required style={{ color: "blue" }}>
              Expiry Date *
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                value={date}
                onChange={(e) => onChangeDate(e)}
                placeholder="MM/YY"
              />
            </div>
          </div>

          <div class="form-group">
            &nbsp; &nbsp; &nbsp;
            <label for="" required style={{ color: "blue" }}>
              {" "}
              Security Code *
            </label>
            <div>
              <input
                type="text"
                class="form-control"
                value={code}
                onChange={(e) => onChangeCode(e)}
                placeholder="ooo"
              />
            </div>
          </div>

          <button className="btn btn-dark" onClick={() => handleSubmit()}>
            {" "}
            Pay Now{" "}
          </button>
        </center>
      </div>
    </div>
  );
}
