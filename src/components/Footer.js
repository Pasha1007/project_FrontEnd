import React, { Component } from 'react';
import globe from './footer_imgs/globe.png'
import geo_loc from './footer_imgs/geo_loc.png'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

class Footer extends Component {
    render() {
        return (
    <div>
     <div class = "footer">
      <div className='topSplit'></div>
      <div className = 'adress'>
      <img className='globe' src={globe}/>
      <img className='geo_loc' src={geo_loc}/>

               <p>
                <a href='#!' className='text-reset'>
                www.fophelper.com
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  83A, вулиця Замарстинівська
                </a>
              </p>
      </div>


      <div className='info'>
        
        <div className='left_info'>
        <h6 className='text-uppercase fw-bold mb-4'>Розділи</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Календар
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Новини
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Блог
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Контакти
                </a>
              </p>
              
        </div>
        <div className='split'>
          
        
          </div>
        <div className='right_info'>
          
        <h6 className='text-uppercase fw-bold mb-4'>Інформація</h6>
              
              <p>
                <a href='#!' className='text-reset'>
                  Про ФОП
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Про нас
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Чат підтримки
                </a>
              </p>
        </div>
        
      </div>
    

        <div className='icons_div'>
        <h6 className='icons_info'>Медіа</h6>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='telegram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href=''  className='me-4 text-reset'>
            <MDBIcon  color='secondary' fas icon='envelope' />
          </a>
          
        </div>
      {/* <MDBFooter bgColor='black' className='text-center text-lg-start text-muted'>
      

      <section className='Company_name'>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Розділи</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Календар
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Новини
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Блог
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Контакти
                </a>
              </p>

            </MDBCol>
            <MDBCol className='splitDiv mx-auto mb-4  '>
            <div className='split'></div>
            </MDBCol>
            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Інформація</h6>
              
              <p>
                <a href='#!' className='text-reset'>
                  Про ФОП
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Про нас
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Чат підтримки
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 id = "media_c" className='text-uppercase fw-bold mb-4'>Медіа</h6>
              
            </MDBCol>
            <section className='d-flex justify-content-center justify-content-lg-between p-4'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div className='icons_div'>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='telegram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='secondary' fas icon='envelope' />
          </a>
          
        </div>
      </section>
          </MDBRow>
        </MDBContainer>
      </section>

      
    </MDBFooter> */}
                </div>
            </div>
        );
    }
}

export default Footer;