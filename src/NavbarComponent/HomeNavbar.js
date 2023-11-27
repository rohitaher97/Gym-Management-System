import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { Navbar, Nav, Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


import '../index.css';


import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';
import YouTubeIcon from '@material-ui/icons/YouTube';
import logogym from '../images/logogym.jpg';


const AppNavbar = () => {

    return (
<>

<Container d-block d-sm-none fluid style={{backgroundColor:'burlywood'}} >
  
  <Row>
    <Col lg={4} xs={4} style={{alignItems:'left',marginTop:"10px"}}><img src={logogym} height= "60px" alt="logo" /></Col>
    <Col lg={4} xs={4} style={{textAlign:'center',color:'black'}}><h2>Fit and Fab Gym</h2>
  <p>
    Mumbai:-7709344159 Pune:-8983102320  Delhi:-8550946100 Other Cities:-8975114849</p></Col>
    
    <Col lg={4} xs={4} style={{textAlign:"right",marginTop:"2px"}}>
   
    <IconButton aria-label="delete" href="https://www.facebook.com/" target="_blank">
    <FacebookIcon color="primary" />
    </IconButton>

    <IconButton aria-label="delete" href="https://www.instagram.com/" target="_blank">
    <InstagramIcon color="secondary" />  
    </IconButton>

    <IconButton aria-label="delete" href="https://www.LinkedIn.com/" target="_blank">
    <LinkedInIcon color="primary" /> 
    </IconButton>
  
    <IconButton aria-label="delete" href="https://www.youtube.com/watch?v=tkAlzCIYT5w" target="_blank">
    <YouTubeIcon color="secondary" /> 
    </IconButton>
    
    </Col>
  </Row>
  </Container>



<Navbar  collapseOnSelect  expand="lg"   sticky="top"  variant="" style={{textAlign:'center',backgroundColor:'#081229'}}>
<div className="d-block d-sm-none " > </div>
<Navbar.Brand href="#home">

</Navbar.Brand>

  <div claaName="container-xs">
  <Navbar.Toggle aria-controls="responsive-navbar-nav"  >

  </Navbar.Toggle>
  <Navbar.Collapse id="responsive-navbar-nav"  style={{textAlign:'center'}} >
  
    <Nav className="me-auto">
 
    
    <LinkContainer to="/getStarted">
    <Nav.Link className="nav-links">HOME</Nav.Link>
    </LinkContainer>
    
      
    <LinkContainer to="/gallery">
    <Nav.Link className="nav-links">GALLERY</Nav.Link>
    </LinkContainer>
      

    <LinkContainer to="/programs">
    <Nav.Link className="nav-links">PROGRAMS</Nav.Link>
    </LinkContainer>
      

    <LinkContainer to="/blogs">
    <Nav.Link className="nav-links">BLOGS</Nav.Link>
    </LinkContainer>
   
    <LinkContainer to="/contact">
    <Nav.Link className="nav-links"> CONTACT</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/createuser">
    <Nav.Link className="nav-links"  > SIGN UP</Nav.Link>
    </LinkContainer>

    <LinkContainer to="/login">
    <Nav.Link className="nav-links"  > SIGN IN</Nav.Link>
    </LinkContainer>

    </Nav>
   
</Navbar.Collapse>
</div>
</Navbar>
</>
)
};
 

export default AppNavbar
