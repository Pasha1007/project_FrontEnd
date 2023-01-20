import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import logo from './navbar_imgs/fop_pic_footer1.jpg';
import acc from './navbar_imgs/acc.jpg';
import { MDBIcon } from 'mdb-react-ui-kit';

class Navbar1 extends Component {

  
    render() {
      
        return (
          <Navbar id='navbarrr'  expand="lg">
          <Container fluid>
          <a class="navbar-brand mt-2 mt-lg-0" href="#">
                   <img className='logo-nav'
                    src={logo}
                    height="80" 
                    loading="lazy"
                  />
                 </a>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link id='nav-i1' href="#action1"><span style={{color:'black',fontSize:'20px'}}>Календар</span></Nav.Link>
                <Nav.Link className='nav-link' href="#action2"><span style={{color:'black',fontSize:'20px'}}>Новини</span></Nav.Link>
                <Nav.Link className='nav-link' href="#action3"><span style={{color:'black',fontSize:'20px'}}>Блог</span></Nav.Link>
                <Nav.Link className='nav-link' href="#action4"><span style={{color:'black',fontSize:'20px'}}>Контакти</span></Nav.Link>
                <MDBIcon className='chat-icon' far icon="comment" size='2x'/>
                <Nav.Link className='nav-link' href="#action5"><span style={{color:'black'}}>Чат підтримки</span></Nav.Link>
              </Nav>
              <img className=''
                    src={acc}
                    height="40" 
                    loading="lazy"
                  />
            </Navbar.Collapse>
          </Container>
        </Navbar>
          // <div id='navb'>
          // <nav id='navbarrr' class="navbar navbar-expand-lg navbar-light">
          //   <div class="container-fluid">
              
          
          //     <div  class="collapse navbar-collapse" id="navbarSupportedContent">
          //       <a class="navbar-brand mt-2 mt-lg-0" href="#">
          //         <img className='logo-nav'
          //           src={logo}
          //           height="80"
          //           loading="lazy"
          //         />
          //       </a>
          //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          //         <li id='nav-i1' class="nav-item">
          //           <a class="nav-link" href="#">Календар</a>
          //         </li>
          //         <li class="nav-item">
          //           <a class="nav-link" href="#">Новини</a>
          //         </li>
          //         <li class="nav-item">
          //           <a class="nav-link" href="#">Блог</a>
          //         </li>
          //         <li class="nav-item">
          //           <a class="nav-link" href="#">Контакти</a>
          //         </li>
          //       </ul>
          //     </div>
          
          //     <div class="d-flex align-items-center">
          
          //       <div class="dropdown">
          //         <a
          //           class="text-reset me-3 dropdown-toggle hidden-arrow"
          //           href="#"
          //           id="navbarDropdownMenuLink"
          //           role="button"
          //           data-mdb-toggle="dropdown"
          //           aria-expanded="false"
          //         >
                   
          //         </a>
          //         <ul
          //           class="dropdown-menu dropdown-menu-end"
          //           aria-labelledby="navbarDropdownMenuLink"
          //         >
          //           <li>
          //             <a class="dropdown-item" href="#">Some news</a>
          //           </li>
          //           <li>
          //             <a class="dropdown-item" href="#">Another news</a>
          //           </li>
          //           <li>
          //             <a class="dropdown-item" href="#">Something else here</a>
          //           </li>
          //         </ul>
          //       </div>
                
          //       <div class="dropdown">
                  
                   
          //          <MDBIcon  color='secondary' fas icon='user-circle' size='2x' />
                 
          //         <ul
          //           class="dropdown-menu dropdown-menu-end"
          //           aria-labelledby="navbarDropdownMenuAvatar"
          //         >
          //           <li>
          //             <a class="dropdown-item" href="#">My profile</a>
          //           </li>
          //           <li>
          //             <a class="dropdown-item" href="#">Settings</a>
          //           </li>
          //           <li>
          //             <a class="dropdown-item" href="#">Logout</a>
          //           </li>
          //         </ul>
          //       </div>
          //     </div>
           
          //   </div>
            
          // </nav>
          
          // </div>
          
        );
    }
}

export default Navbar1;