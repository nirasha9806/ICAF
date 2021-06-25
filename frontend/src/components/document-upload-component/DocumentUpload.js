import React, { useState } from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CInput,
  CLabel,
  CFormGroup,
  CButton,
} from '@coreui/react';
import axios from 'axios';

export default function DocumentUpload() {
  const [selectedType, setSelectedType] = useState(null);
  const [paperTitle, setPaperTitle] = useState(null);
  const [date, setDate] = useState(null);
  const [authorName, setAuthorName] = useState(null);
  const [email, setEmail] = useState(null);

  const onSelectType = (value) => {
    setSelectedType(value);
  };

  const onHandlePaperTitleChange = (e) => {
    setPaperTitle(e.target.value);
  };

  const onHandleDateChange = (e) => {
    setDate(e.target.value);
  };

  const onHandleNameChange = (e) => {
    setAuthorName(e.target.value);
  };

  const onHandleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onUploadDocument = () => {
    var researchPaper = {
      paperTitle: paperTitle,
      date: date,
      authorName: authorName,
      email: email,
    };

    axios
      .post(
        'http://localhost:5000/api/documentUpload/insertResearchPaper',
        researchPaper
      )
      .then((response) => {
        if (response.data.success) {
          alert('Data has been sent to the server');
        } else {
          alert('Data not sent to the server');
        }
      });
  };

  return (
    <div>
      <CRow>
        <CCol sm='12' md='4' lg='4'>
          <CCard style={{ minHeight: '205px' }}>
            <CCardBody>
              <CDropdown style={{ width: '100%' }}>
                <CDropdownToggle style={{ width: '100%' }} caret color='info'>
                  {selectedType ? selectedType : 'Select Document Type'}
                </CDropdownToggle>
                <CDropdownMenu
                  style={{
                    overflowY: 'scroll',
                    height: '350px',
                    width: '100%',
                  }}
                >
                  <CDropdownItem
                    value={'Research Papers'}
                    onClick={() => onSelectType('Research Papers')}
                  >
                    Research Papers
                  </CDropdownItem>
                  <CDropdownItem
                    value={'Workshop Proposals'}
                    onClick={() => onSelectType('Workshop Proposals')}
                  >
                    Workshop Proposals
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <br />
              <hr />
              <br />

              {selectedType ? (
                <></>
              ) : (
                <p style={{ textAlign: 'center' }}>
                  Please select a Document Type
                </p>
              )}
              <CFormGroup>
                {selectedType === 'Research Papers' ? (
                  <div>
                    <CCol xs='12' md='12'>
                      <CLabel htmlFor='name'>Paper Title :</CLabel>
                    </CCol>
                    <CCol xs='12' md='12'>
                      <CInput
                        name='title'
                        placeholder='Enter Title'
                        value={paperTitle}
                        type='text'
                        onChange={(e) => onHandlePaperTitleChange(e)}
                      />
                    </CCol>{' '}
                    <br />
                    <CCol xs='12' md='12'>
                      <CLabel htmlFor='name'>Date :</CLabel>
                    </CCol>
                    <CCol xs='12' md='12'>
                      <CInput
                        name='date'
                        placeholder='MM/DD/YY'
                        value={date}
                        type='text'
                        onChange={(e) => onHandleDateChange(e)}
                      />
                    </CCol>{' '}
                    <br />
                    <CCol xs='12' md='12'>
                      <CLabel htmlFor='name'>Name of Author :</CLabel>
                    </CCol>
                    <CCol xs='12' md='12'>
                      <CInput
                        name='authorName'
                        placeholder='Enter Name'
                        value={authorName}
                        type='text'
                        onChange={(e) => onHandleNameChange(e)}
                      />
                    </CCol>{' '}
                    <br />
                    <CCol xs='12' md='12'>
                      <CLabel htmlFor='name'>Email Address :</CLabel>
                    </CCol>
                    <CCol xs='12' md='12'>
                      <CInput
                        name='email'
                        placeholder='Enter email'
                        value={email}
                        type='text'
                        onChange={(e) => onHandleEmailChange(e)}
                      />
                    </CCol>{' '}
                    <br />
                  </div>
                ) : selectedType === 'Workshop Proposals' ? (
                  <CCol xs='12' md='12'>
                    <CLabel htmlFor='name'>Workshop Title</CLabel>
                  </CCol>
                ) : (
                  <></>
                )}

                <CButton
                  color='info'
                  size='sm'
                  style={{ float: 'right' }}
                  onClick={() => onUploadDocument()}
                >
                  {/* <CIcon name='cil-cloud-upload' /> */}
                  Upload
                </CButton>
              </CFormGroup>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
}
