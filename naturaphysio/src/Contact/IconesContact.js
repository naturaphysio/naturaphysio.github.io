// Importe des icones
import adresse_ione from "../images/contact/pin.png";
import courriel_icone from "../images/contact/courriel.png";
import telephone_icone from "../images/contact/telephone.png";

// Importe de la librairie de react-bootstrap
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const IconesContact = () => {
    return (
        <Col className="contact-col">
            <div className="infoContact">

                {/* Titre de la page */}
                <div className="row">
                    <h2>CONTACTEZ-NOUS</h2>
                    <hr className="ps-3 pe-3"></hr>
                </div>
                    
                {/* Adresse */}
                <div className="row">
                    <div className="adresse">
                        <img src={adresse_ione} alt="Icône de l'adresse" />
                        <p>
                            800 King Edward Ave
                            <br></br>
                            Ottawa
                            <br></br>
                            ON K1N 6N5
                        </p>
                    </div>
                </div>

                {/* Numéro de téléphone */}
                <div className="row">
                    <div className="telephone">
                        <img src={telephone_icone} alt="Icône d'un téléphone" />
                        <p>613-109-9876</p>
                    </div>
                </div>

                {/* Courriel */}
                <div className="row">
                    <div className="courriel">
                        <img src={courriel_icone} alt="Icône d'un courriel" />
                        <p>natura.physio@natura.com</p>
                    </div>
                </div>

                {/* Heures d'ouvertures */}
                <div className="row">
                    <div className="ouvertures">
                        <p><strong><br></br>HEURES D'OUVERTURES</strong></p>
                        <p>
                            Lundi-Vendredi: 9h-19h
                            <br></br>
                            Samedi: 11h-16h
                            <br></br>
                            Dimanche: fermé
                        </p>
                    </div>
                </div>

                <Link to='/reservation'><button className="btn">Prendre un rendez-vous</button></Link>
                {/* <a href='/reservation'><button className="btn">Prendre un rendez-vous</button></a> */}

            </div>

        </Col>
     );
}

export default IconesContact;