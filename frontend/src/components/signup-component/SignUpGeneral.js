import React, { useState } from 'react';
import { CRow, CCol } from '@coreui/react';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SlideshowIcon from '@material-ui/icons/Slideshow';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import Modal from './ResearcherSignUPModal';
import PModal from './WorkshopPresenterSignUp';

export default function SignUpGenereal() {

  const [researcherModal, setOpenResearcherModal] = useState(false);
  const [presenterModal, setOpenPresenterModal] = useState(false);

  const ResearcherSignUP = () => {
    setOpenResearcherModal(true);
  };

  const PresenterSignUP = () => {
    setOpenPresenterModal(true);
  };

  return (
    <div>
      <br />
      <center>
          <h3>Select Your User Type to Sign Up</h3> <br/>
        <div>
          <CCol sm='6' lg='3'>
            <div
              className='small-box bg-info'
              style={{ cursor: 'pointer' }}
              onClick={() => ResearcherSignUP()}
            >
              <div className='inner'>
                <h3 style={{ color: '#ffffff' }}>Researchers</h3>
              </div>
              <div className='icon'>
                <ReceiptIcon
                  style={{ color: '#ffffff', width: 50, height: 50 }}
                />
              </div>
              <div className='small-box-footer'>&nbsp;</div>
            </div>
          </CCol>{' '}
          <br />
          <CCol sm='6' lg='3'>
            <div
              className='small-box bg-success'
              style={{ cursor: 'pointer' }}
              onClick={() => PresenterSignUP()}
            >
              <div className='inner'>
                <h3 style={{ color: '#ffffff' }}>Workshop Presenters</h3>
              </div>
              <div className='icon'>
                <SlideshowIcon
                  style={{ color: '#ffffff', width: 50, height: 50 }}
                />
              </div>
              <div className='small-box-footer'>&nbsp;</div>
            </div>
          </CCol>{' '}
          <br />
          <CCol sm='6' lg='3'>
            <div
              className='small-box bg-warning'
              style={{ cursor: 'pointer' }}
              onClick={() => ResearcherSignUP()}
            >
              <div className='inner'>
                <h3 style={{ color: '#ffffff' }}>Attendees</h3>
              </div>
              <div className='icon'>
                <SupervisorAccountIcon
                  style={{ color: '#ffffff', width: 50, height: 50 }}
                />
              </div>
              <div className='small-box-footer'>&nbsp;</div>
            </div>
          </CCol>
        </div>
      </center>
      <Modal title='Researcher Sign Up' openPopup={researcherModal} setOpenPopup={setOpenResearcherModal}/>
      <Modal title='Workshop Presenter Sign Up' openPopup={presenterModal} setOpenPopup={setOpenPresenterModal}/>
      
    </div>
  );
}
