import React, { useState } from 'react';
import { CModal, CModalTitle, CButton } from '@coreui/react';
import axios from 'axios';
export default function PModal(props) {
  const { title, openPopup, setOpenPopup } = props;

  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [phone, setPhone] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [pTitle, setTitle] = useState(' ');
  const [date, setDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDate = (e) => {
    setDate(e.target.value);
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = () => {
    if (selectedFile === null) {
      alert('Please upload the workshop proposal');
    }

    let formdata = new FormData();
    formdata.append('name', name);
    formdata.append('email', email);
    formdata.append('phone', phone);
    formdata.append('password', password);
    formdata.append('title', pTitle);
    formdata.append('date', date);
    formdata.append('file', selectedFile, selectedFile.name);

    axios
      .post('http://localhost:5000/api/workshop/signup', formdata)
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CModal show={openPopup} closeOnBackdrop={false}>
      <CButton
        className='btn-sm'
        color='secondary'
        onClick={() => setOpenPopup(false)}
      >
        X
      </CButton>
      <div class='form-group w-25' className='shadow p-5'>
        <center>
          <CModalTitle>{title}</CModalTitle>
        </center>
        <br />
        <br />
        <label class='float-left'>
          <span>Researcher Name:</span>
        </label>

        <input
          name='name'
          type='text'
          className='form-control'
          placeholder='123-45-678'
          value={name}
          onChange={(e) => onChangeName(e)}
        />

        <label class='float-left'>
          <span>Email:</span>
        </label>

        <input
          name='email'
          type='text'
          className='form-control'
          value={email}
          onChange={(e) => onChangeEmail(e)}
        />

        <div className='form-group'>
          <label class='float-left'>Phone:</label>
          <input
            name='phone'
            type='text'
            className='form-control'
            value={phone}
            onChange={(e) => onChangePhone(e)}
          />
        </div>

        <div className='form-group'>
          <label class='float-left'>Password:</label>
          <input
            name='password'
            type='password'
            className='form-control'
            value={password}
            onChange={(e) => onChangePassword(e)}
          />
        </div>

        <div className='form-group'>
          <label class='float-left'>Paper Title:</label>
          <input
            name='title'
            type='text'
            className='form-control'
            value={pTitle}
            onChange={(e) => onChangeTitle(e)}
          />
        </div>

        <div className='form-group'>
          <label class='float-left'>Date:</label>
          <input
            name='date'
            type='text'
            placeholder='DD/MM/YY'
            className='form-control'
            value={date}
            onChange={(e) => onChangeDate(e)}
          />
        </div>

        <div>
          <label>Upload Proposal: </label>{' '}
          <input type='file' onChange={(e) => fileSelectedHandler(e)} />
          <br />
          <br />
        </div>

        <center>
          <div className='form-group'>
            <span> </span>{' '}
            <button className='btn btn-dark' onClick={() => onSubmit()}>
              Sign Up{' '}
            </button>
          </div>
        </center>
      </div>
    </CModal>
  );
}
