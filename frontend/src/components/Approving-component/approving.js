import React, {Component} from 'react';

import axios from 'axios';

export default class Approve extends Component{

    constructor(props){
        super(props);

        this.onChangecardnumber = this.onChangecardnumber.bind(this);
        this.onChangecardholder = this.onChangecardholder.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeCVC = this.onChangeCVC.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            card_number: '',
            card_holder: '',
            date: '',
            CVC: ''
        }



    }

    onChangecardnumber(e){
        this.setState({
            card_number:e.target.value
        });
    }

    onChangecardholder(e){
        this.setState({
            card_holder:e.target.value
        });
    }

    onChangeDate(e){
        this.setState({
            date:e.target.value
        });
    }

    onChangeCVC(e){
        this.setState({
            CVC:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        const obj = {
            card_number : this.state.card_number,
            card_holder : this.state.card_holder,
            date : this.state.date,
            CVC : this.state.CVC
        };

        axios.post('http://localhost:5000/api/account/add', obj).then(res => console.log(res.data));

        this.setState({
            card_number: '',
            card_holder: '',
            date: '',
            CVC: ''
        })
    }

    render(){
        return(

            <div style={{marginTop:10}}>

                <h3><center>Responsive Checkout Form</center></h3>
                <form onSubmit={this.onSubmit}>
                    <div className = "form-group">
                        <label>Card Number:</label>
                        <input type = "text" className="form-control" value={this.state.card_number} onChange={this.onChangecardnumber} />
                    </div>

                    <div className = "form-group">
                        <label>Card Holder Name:</label>
                        <input type = "text" className="form-control" value={this.state.card_holder} onChange={this.onChangecardholder} />
                    </div>
                    <div className = "form-group">
                        <label>Date:</label>
                        <input type = "text" className="form-control" value={this.state.date} onChange={this.onChangeDate} />
                    </div>

                    <div className = "form-group">
                        <label>CVC:</label>
                        <input type = "text" className="form-control" value={this.state.CVC} onChange={this.onChangeCVC} />
                    </div>
                    <div className = "form-group">
                        
                        <input type = "submit" value="Submit" className="btn btn-primary" />
                    </div>
                </form>


            </div>
            
            
        )
    }
}