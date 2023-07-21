// Importe de la librairie de react-bootstrap
import { Row } from "react-bootstrap";

// Fichier
import FormulaireContact from "./FormulaireContact";

const ContactForm = () => {
    return (
        <Row>
            <div className="contactForm">
                
                <div className="col-sm-12 col-md-6 p-5 formulaireContact">
                    <h3 className="white">
                        Une question, une crainte ou une rétroaction ?
                        <br></br>
                        Envoyez-nous un message.
                    </h3>
                    <h4 >Notre équipe vous reviendra dans les plus brefs délais.</h4>

                    {/* Formulaire de contact */}
                    <div className="formulaire_contact">
                        <FormulaireContact/>
                    </div>

                </div>

                {/* Frame de Google maps qui montre l'emplacement de la clinique */}
                <div className="col-sm-12 col-md-6 p-5">
                    <iframe name="map" title="map" className="w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5886.136209237726!2d-75.68006989234236!3d45.419172838163696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a74e93237b%3A0x2e6c2c10b7581602!2sSITE%2C%20800%20King%20Edward%20Ave%2C%20Ottawa%2C%20ON%20K1N%206N5!5e0!3m2!1sen!2sca!4v1688066691066!5m2!1sen!2sca" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </Row>
    );
}

export default ContactForm;