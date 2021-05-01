import React, { Component } from 'react';
import '../../css/AttendeePayment.css';
import { Button} from 'react-bootstrap';
import axios from 'axios';

export default class AttendeePayment extends Component {

    constructor() {
        super();
        this.state = {
        //   input: {},
        //   errors: {},
          name:'',
          email:'',
          radio1:'',
          amount:'',
          number:'',
          date:'',
          code:''
        };
        //this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    // onChangeEmail(event) {
    //     let input = this.state.input;
    //     input[event.target.name] = event.target.value;
      
    //     this.setState({
    //       input
    //     });
    // }

    handleSubmit  = (event) => {
        event.preventDefault();

        const Payment = {
            
            name: this.state.name,
            email: this.state.email,
            radio1: this.state.radio1,
            amount: this.state.amount,
            number: this.state.number,
            date: this.state.date,
            code: this.state.code,
        };

              
        // if(this.validate()){
        //     console.log(this.state);
      
        //     let input = {};
        //     input["email"] = "";
        //     this.setState({input:input});
      
        //     alert('Your payment details were successfully added !!');
        // }

        axios.post("http://localhost:5000/api/payment/insertPayment", Payment)
            .then(response => {
                if(response.data.success){
                    console.log('Data has been sent to the server')
                } else {
                    console.log('Data not sent to the server')
                }
            })
      
    }

    onChangeName = e =>{
        console.log(e.target.value)

        this.setState({
          name: e.target.value //target is textbox and value is textbox value
        })
    }

    onChangeEmail = e =>{
        console.log(e.target.value)

        this.setState({
          email: e.target.value //target is textbox and value is textbox value
        })
    }

    onChangeRadio1 = e => {

        console.log(e.target.value)

        this.setState( {
            [e.target.name]:e.target.value
        })
    }

    onChangeAmount = e =>{
        console.log(e.target.value)

        this.setState({
          amount: e.target.value //target is textbox and value is textbox value
        })
    }

    onChangeNumber = e =>{
        console.log(e.target.value)

        this.setState({
          number: e.target.value //target is textbox and value is textbox value
        })
    }

    onChangeDate = e =>{
        console.log(e.target.value)

        this.setState({
          date: e.target.value //target is textbox and value is textbox value
        })
    }


    onChangeCode = e =>{
        console.log(e.target.value)

        this.setState({
          code: e.target.value //target is textbox and value is textbox value
        })
    }

    // validate(){
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;
    
    
    //     if (!input["email"]) {
    //       isValid = false;
    //        errors["email"] = "Please enter your email Address.";
    //     }
    
    //     if (typeof input["email"] !== "undefined") {
            
    //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //       if (!pattern.test(input["email"])) {
    //         isValid = false;
    //         errors["email"] = "Please enter valid email address.";
    //       }
    //     }
    
    //     this.setState({
    //       errors: errors
    //     });
    
    //     return isValid;
    // }

    render() {

        return(
            <div className ="App">

            <br/><br/>

                <center>
                        <h2 className = 'header2'>Attendee Payment </h2>
                        
                </center>

                <h2> Payment Details Form  </h2>

                <div className="shadow p-5" style= {{width:'45rem', marginLeft:'345px'}}>

                       
                        <div className="card-body">
                        
                            <div class="card-header">
                                <b><center>Payment Information</center></b>
                            </div>

                        </div>
                    <form onSubmit={this.handleSubmit}>

                        <div class="form-group">
                                 &nbsp; &nbsp; &nbsp;<label for="" required>Attendee Name *</label>
                                <div>
                                <input type="text" class="form-control"
                                       value={this.state.name}
                                       onChange={this.onChangeName}
                                placeholder="enter name"/></div>
                        </div>

                        <div class="form-group">
                                
                                &nbsp; &nbsp; &nbsp;<label for="email" required>Attendee Email address *</label>
                                <div>
                                <input type="text" class="form-control" name="email" placeholder="enter email"
                                 value={this.state.email}
                                 onChange={this.onChangeEmail}
                                id="email"/></div>
                                <small id="emailHelp" class="form-text text-muted"> We'll never share your email with anyone else.</small>
                            
                                {/* <div className="text-danger">{this.state.errors.email}</div> */}
                        </div>

                    <div className="form-group">

                        <label>Event Type *</label>    
                    </div>
    
                    <input type="radio"
                    name="radio1"
                    value="Research Paper Presentation"
                    required
                    checked={this.state.radio1 ==="Research Paper Presentation"} onChange={this.onChangeRadio1}
                    /> Research Paper Presentation <br/>

                    <input type="radio" 
                    name="radio1" 
                    value="Workshop" 
                    required
                    checked={this.state.radio1 ==="Workshop"} onChange={this.onChangeRadio1}
                    /> Workshop <br/>
                     
                    <p></p>

                    <div class="form-group">
                                 &nbsp; &nbsp; &nbsp;<label for="" required>Payment Amount *</label>
                                <div>
                                <input type="text" class="form-control"
                                       value={this.state.amount}
                                       onChange={this.onChangeAmount}
                                placeholder="enter amount"/></div>
                    </div>
                    
                        <br></br><br></br>

                        <div className="card-body">
                                
                                    <div class="card-header">
                                        <b><center>Payment Method</center></b>
                                    </div>
                                    
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required>Card Number *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={this.state.number}
                                        onChange={this.onChangeNumber}
                                    placeholder="0000 0000 0000 0000"/></div>
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required>Expiry Date *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={this.state.date}
                                        onChange={this.onChangeDate}
                                    placeholder="MM/YY"/></div>
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required> Security Code *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={this.state.code}
                                        onChange={this.onChangeCode}
                                    placeholder="ooo"/></div>
                        </div>


                         
                            <input type="submit" value="Submit" class="btn btn-dark" onClick={ event => window.confirm("Are you sure you want to add this payment details?")}/>

                        </form>
                </div>
            
            </div>

        )
    }

}