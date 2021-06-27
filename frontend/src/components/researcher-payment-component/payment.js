import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../../img/xxxx.png';


export default function Approve() {
  const [card_number, setcard_numebr] = useState(' ');
  const [card_holder, setcard_holder] = useState(' ');
  const [date, setdate] = useState(' ');
  const [CVC, setCVC] = useState(' ');
  
  const onSubmit = () => {
    const details = {
      card_number: card_number,
      card_holder: card_holder,
      date: date,
      CVC: CVC,
      
    };

    
    axios.post('http://localhost:5000/api/account/add', details).then(res => console.log(res.data));

  };
  const onChangecard_number = (e) => {
    setcard_numebr(e.target.value);
    console.log(e.target.value);
  };

  const onChangecard_holder = (e) => {
    setcard_holder(e.target.value);
  };

  const onChangedate = (e) => {
    setdate(e.target.value);
  };

  const onChangeCVC = (e) => {
    setCVC(e.target.value);
  };

  return (
    
      <div>
        
        <br />
        <br />
        <center>
          <div
            class='form-group w-25'
            className='shadow p-5.3'
            style={{ width: '45rem' }}
          >
            <h3>
              <center>Responsive Checkout Form</center>
            </h3>
  
            <br></br>
  
            
  
            <label class='float-left'>
              <span>Card Number</span>
            </label>
  
            <input
              name='card_number'
              type='number'
              className='form-control'
              placeholder='123-45-678'
              value={card_number}
              onChange={(e) => onChangecard_number(e)}
            />

          <br></br>
          <label class='float-left'>
            <span>Card Holder</span>
          </label>

          <input
            name='card_holder'
            type='text'
            className='form-control'
            value={card_holder}
            onChange={(e) => onChangecard_holder(e)}
          />
            <br></br>
          <label class='float-left'>Date</label>
                      <input
                        name='date'
                        type='date'
                        className='form-control'
                        value={date}
                        onChange={(e) => onChangedate(e)}
                      />

              <br></br>
              <label class='float-left'>CVC</label>
                          <input
                            name='CVC'
                            type='number'
                            placeholder='678'
                            className='form-control'
                            value={CVC}
                            onChange={(e) => onChangeCVC(e)}          
                            />

           <br></br>
            
            <img src={image} alt="Write something here" width="70%" height = "50%"/>
            
            <span> </span>{' '}
            <button className='btn btn-primary' onClick={() => onSubmit()}>
              Add Payment{' '}
            </button>              
            </div>
            </center>
            </div>
  );
}
