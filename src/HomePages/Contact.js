import { Container } from "react-bootstrap"
import {Row,Col,Image} from 'react-bootstrap'
import Gajanan from '../images/Gajanan.jpg';
import Swar from '../images/Swar.jpg';
import Ankit from '../images/Ankit.jpg';
import Shashank from '../images/Shashank.jpg';
import Vaibhav from '../images/Vaibhav.jpg';
import Pritish from '../images/Pritish.jpg';


const Contact= () => {
    return (
     <>
     <h1  style={{color:"tomato",textAlign:"center",marginTop:'50px'}}>Fit and Fab Gym's Contacts</h1>
     
     <Container style={{marginTop:'80px'}}>
     <Row >
       <Col><Image src= {Swar} width= "100%" height="400px" /></Col>
       <Col>
       <h1 style={{color:"springgreen",textAlign:"center"}}>Fit and Fab Gym - Amravati</h1><br/>
       <h3>Swargandh Pradhan</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>

OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
<br/>
Address:- 202-203, Trade Avenue, Suren Road, Off.
Western Express Highway, Amravati - 444601.
<br/>
Phone:8550946100
<br/>
Email: swargandh@gmail.com</p>
       </Col>
     </Row>
   </Container>


   <Container style={{marginTop:'50px'}}>
     <Row >
       <Col>
       <h1 style={{color:"purple",textAlign:"center"}}>Gaju Bhau's Fit and Fab Gym - Parbhani</h1><br/>
       <h3>Gajanan Pise</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 502-503, Latur naka , Parbhani road , opposite to Gold's Gym ,Parbhani- 431401.
                <br/>
            Phone:7709344159
            
            <br/>
            Email: gajubhau@gmail.com

       
       </p>

       </Col>
       <Col><Image src= {Gajanan} width= "100%" /></Col>
     </Row>
   </Container>


   <Container style={{marginTop:'50px'}}>
     <Row >
       <Col><Image src= {Ankit} width= "100%" height="400px" /></Col>
       <Col>
       <h1 style={{color:"orange",textAlign:"center"}}>Fit and Fab Gym - Amalner </h1><br/>
       <h3>Ankit Amrutkar</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 815,Royal Heritage, opposite to Silver Gym, Amalner - 425401.
                <br/>
            Phone:8983102320
            
            <br/>
            Email: ankit@gmail.com

       
       </p>

       </Col>
     </Row>
   </Container>
   <Container style={{marginTop:'50px'}}>
     <Row >
     <Col>
     <h1 style={{color:"chocolate",textAlign:"center"}}>Fit and Fab Gym - Akole </h1><br/>
       <h3>Vaibhav Shelke</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 978 , A.Nagar Road, Golden palace, Akole - 422601. 
                <br/>
            Phone:9921544454
            
            <br/>
            Email: vaibhav@gmail.com


       
       </p>

     </Col>
       <Col><Image src= {Vaibhav} width= "100%" height="400px" /></Col>
     </Row>
   </Container>

   <Container style={{marginTop:'80px'}}>
     <Row >
       <Col><Image src= {Shashank} width= "100%" height="400px" /></Col>
       <Col>
       <h1 style={{color:"springgreen",textAlign:"center"}}>Fit and Fab Gym - Hingoli</h1><br/>
       <h3>Shashank Dalvi</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>

OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
<br/>
Address:- 202-203, Trade Avenue, Suren Road, Off.
Western Express Highway, Hingoli - 431513.
<br/>
Phone: 8975114849
<br/>
Email: shashank@gmail.com</p>
       </Col>
     </Row>
   </Container>


   <Container style={{marginTop:'50px'}}>
     <Row >
       <Col>
       <h1 style={{color:"purple",textAlign:"center"}}>Fit and Fab Gym - Buldhana</h1><br/>
       <h3>Pritish Patil</h3><br/>
       <p>WE ARE ALWAYS READY TO HEAR FROM YOU :
       <br/>
       OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS.<br/>
       <br/>
       Address:- 420-120, Royal Plaza, opposite to Platinum Gym ,Buldhana- 443001.
                <br/>
            Phone: 7057048683
            
            <br/>
            Email: pritish@gmail.com

       
       </p>

       </Col>
       <Col><Image src= {Pritish} width= "100%" /></Col>
     </Row>
   </Container>
   <br/>  <br/>  <br/>  <br/> 
   </>
    )
} 

export default Contact