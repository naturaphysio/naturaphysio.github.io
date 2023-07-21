import { Col, Container, Row } from "react-bootstrap";
import image from "../images/contact.png"
import IconesContact from "./IconesContact";

const ContactezNous = () => {
    return (
        <Container className="contact">
            <div className="col-12 col-md-6">
                <img src={image} alt="Image de dumbbells" className="w-100 h-100" />
            </div>
                
            
            <div className="col-sm-12 col-md-6">
                <IconesContact/>
            </div>

        </Container>
     );
}

export default ContactezNous;