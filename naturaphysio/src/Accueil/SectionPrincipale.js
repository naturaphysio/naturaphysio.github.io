// Importe de la bibliothèque React-bootstrap
import { Container, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

// Importe des images & icones
import icon_locationWhite from "../images/locationWhite.png";
import icon_clock from "../images/clockWhite.png";
import icon_mail from "../images/mailWhite.png";
import icon_phone from "../images/phoneWhite.png";
import imagePrincipal from "../images/imagePrincipale.png";
import titre from "../images/natura_physio_noir.png";


const SectionPrincipale = () => {

    return ( 
        <Container>
            <div className="container">
                <div className="imagePrincipale" >
                    
                    <img src={imagePrincipal} alt="Image principale du site web" role="img" />
                    
                    {/* Titre descriptif */}
                    <div className="titre-sur-image">
                        <img src={titre} alt="Logo de NATURA physio" role="img" />
                        <h3>La meilleure solution pour vos douleurs se trouve ici</h3>
                        <OverlayTrigger
                           
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-btn">
                                    Redirigé sur la page <strong>À propos</strong>.
                                </Tooltip>
                            }
                        >
                            {/* <a href='/about'><button className="btn">Découvrir</button></a> */}
                            <Link to='/about'><button className="btn">Découvrir</button></Link>
                        </OverlayTrigger>
                        
                    </div>
                    <div className="imgBarre">

                        {/* Barre qui affiche les informations en dessous de l'image principale */}
                        <Container>
                            <div className="row icons">

                                {/* Adresse */}
                                <div className="col">
                                    <div className="adresse">
                                        <div className="row">
                                            <img src={icon_locationWhite} alt="Icone adresse" />
                                            <p>800 King Edward Ave<br></br>
                                            Ottawa
                                            <br></br>
                                            ON K1N 6N5</p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Courriel & telephone */}
                                <div className="col">
                                    <div className="phone_mail">
                                            
                                        <div className="mail">
                                            <div className="row">
                                                <img src={icon_mail} alt="Icone courriel" />
                                                <p>natura.physio@natura.com</p>
                                            </div>
                                        </div>
                                        <div className="phone">
                                            <div className="row">
                                                <img src={icon_phone} alt="Icone telephone" />
                                                <p>613-109-9876</p>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                    
                                {/* Heures d'ouvertures */}
                                <div className="col">
                                    <div className="heuresOuvertures">
                                        <div className="row">
                                            <img src={icon_clock} alt="Icone heures d'ouvertures" />
                                            <p>Lundi-Vendredi: 9h-19h<br></br>Samedi: 11h-16h<br></br>Dimanche: fermé</p>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                                
                        </Container>
                    </div>
                </div>
            </div>
        </Container>
        
     );
}
 
export default SectionPrincipale;