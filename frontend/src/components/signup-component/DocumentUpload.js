import React, { useState } from 'react';
import {
    CButton,
    CCard,
    CCol,
    CLabel,
    CRow,
    CImg,
    CInput,
    CTooltip,
    CFormText,
  } from '@coreui/react';
import { useDropzone } from 'react-dropzone';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

export function MyDropzone() {

    const { isDragActive, getRootProps, getInputProps } = useDropzone({
        // onDrop,
        minSize: 0,
      });

  return (
    <div>
      <div className=' text-center m-1'>
        <div
          {...getRootProps()}
          style={{
            width: '100%',
            backgroundColor: !isDragActive ? '#fafbfc' : '#000000',
            borderWidth: '3px',
            borderStyle: 'dashed',
            borderColor: '#b1b3b5',
            cursor: 'pointer',
          }}
          className='m-auto'
        >
          <div className='m-auto pt-3 pb-1 py-3'>
            <br />
            <input {...getInputProps()} />
            <label style={{ cursor: 'pointer' }}>
              {!isDragActive ? (
                <div>
                  <h6>Drag and Drop you files here</h6>
                  <p>or</p>
                  <CLabel className='bg-success p-2'>
                     Select File
                  </CLabel>
                </div>
              ) : (
                <h4 style={{ color: 'white' }}>Drop to upload!</h4>
              )}
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
