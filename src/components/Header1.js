import React, { Component } from 'react';
import logo from './Header1_imgs/logo.svg';
import yellowback from './Header1_imgs/yellowback.png';
import girlphone from './Header1_imgs/girl_phone.png';
import Navbar1 from './NavbarComp';
import Registration from './Registration';
import {useState} from 'react'

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBModalDialog,
  MDBModalContent,
  MDBModalTitle,
} from 'mdb-react-ui-kit'

function Header1() {
   
   
    const [basicModal, setBasicModal] = useState(false);
    const toggleShow = () => setBasicModal(!basicModal);
        return (
    <>
        <div class='mainpage'>
        <div class="header-blue">
    <Navbar1/>


            <div id="headermain" class="cont hero">
              
                <div style={{width:"100%"}} class="row">
                  <div class="col-lg-3 head" style={{width:"300px", paddingLeft:'140px'}}>
                    <div style={{width:"500px"}} id='headerblck' class="col-12 col-lg-6 col-xl-5 offset-xl-1">
                      <div class='butns'>
                        <h1>Календар</h1>
                        <p>Твій щоденник календар із
                           актуальними податковими новинами.</p>
                        <MDBBtn onClick={toggleShow} id="redbut" class="btn btn-light btn-lg action-button" type="button">Вхід</MDBBtn>
                        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1'>
                          <MDBModalDialog>
                            <MDBModalContent>
                              <MDBModalHeader>
                                <MDBModalTitle>Login</MDBModalTitle>
                                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
                              </MDBModalHeader>
                              <MDBModalBody><Registration/></MDBModalBody>
              
                              <MDBModalFooter>
                                <MDBBtn color='secondary' onClick={toggleShow}>
                                  Close
                                </MDBBtn>
                              </MDBModalFooter>
                            </MDBModalContent>
                          </MDBModalDialog>
                        </MDBModal>
                        <div>
                        <MDBBtn id="redbut1" class="btn btn-light btn-lg action-button" type="button">Зареєструватися</MDBBtn>
                        </div>
                        <div className='nothing'></div>
                    </div>
                    </div>
                    <div class="imgsheader">
                      <p></p>
                    </div>
                </div>
                <div class="col b" style={{width:'1100px'}}>
                  <img id='girlphn' src={girlphone} style={{width:"905px",height:"666px", marginLeft:"167px", marginTop:"94px"}}/>
                </div>
            </div>
            
        </div>
        </div>
       
        </div>
    </>
        );
    
}

export default Header1;