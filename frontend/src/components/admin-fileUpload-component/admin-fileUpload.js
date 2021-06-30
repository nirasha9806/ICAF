import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FileUpload() {  // Admin upload a file 
  const [itemtype, setItemType] = useState(' ');
  const [size, setSize] = useState(' ');
  const [selectedFile, setSelectedFile] = useState(null);

  const onChangeitemtype = (e) => {
    setItemType(e.target.value);
    console.log(e.target.value);
  };

  const onChangesize = (e) => {
    setSize(e.target.value);
  };

  const fileSelectedHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onSubmit = () => {
    let formdata = new FormData();
    formdata.append('itemtype', itemtype);
    formdata.append('size', size);
    formdata.append('image', selectedFile, selectedFile.name);
    console.log(itemtype);

    axios
      .post('http://localhost:5000/template/add', formdata) // upload the file and add to the template collection in mongo db
      .then((res) => {
        alert(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (  // get the structure of uploding a file
    <div>
        <center>
        <div
          class='form-group w-25'
          className='shadow p-5'
          style={{ width: '45rem' }}
        >
          <h3>
            <center>Add Templates</center>
          </h3>
          <br></br>
          <div>
            <br />
            <br />
            <label>Choose Image: </label>{' '}
            <input type='file' onChange={(e) => fileSelectedHandler(e)} />
            <br />
            <br />
          </div>

          <label class='float-left'>
            <span>Template Type:</span>
          </label>

          <input
            name='item'
            type='text'
            className='form-control'
            placeholder=''
            value={itemtype}
            onChange={(e) => onChangeitemtype(e)}
          />

          <label class='float-left'>
            <span>Template Size:</span>
          </label>

          <input
            name='price'
            type='text'
            className='form-control'
            value={size}
            onChange={(e) => onChangesize(e)}
          />
          <br/>
          <div className='form-group'>
            <span> </span>{' '}
            <button className='btn btn-dark' onClick={() => onSubmit()}>
              Add template{' '}
            </button>
          </div>
        </div>
      </center>
    </div>
  );
}
