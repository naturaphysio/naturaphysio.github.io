// Importe de la librairie de react
import { Col, OverlayTrigger, Tooltip } from "react-bootstrap";

// Images et icones
import titre from "./images/natura_blanc.png";
import pin from "./images/locationWhite.png";
import phone from "./images/phoneWhite.png";
import facebook from "./images/footer/icon_facebook.png";
import insta from "./images/footer/icon_instagram.png";
import pinterest from "./images/footer/icon_pinterest.png";
import twitter from "./images/footer/icon_twitter.png";

// Afin de changer la langue
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

const Footer = () => {

    // Changement de langue
    const { t } = useTranslation();

    return ( 
        <footer>
            <section className="footerInfo">
                <div className="col gauche g-sm-4">

                    {/* Logo de la compagnie */}
                    <div className="row">
                        <a href="/" className="navbar-brand">
                            <img src={titre} alt="Logo de Natura physio" role="img" className="naturaPhysio" />
                        </a>
                    </div>
                    <hr className="gauche w-75 m-1 ms-0"></hr>
                    
                    {/* Adresse */}
                    <div className="adresse ms-auto">
                        <div className="col">
                            <img src={pin} alt="Icône d'emplacement" role="img" />
                        </div>
                        <div className="col">
                            <p>800 King Edward Ave, Ottawa, ON K1N 6N5</p>
                        </div>
                    </div>

                    {/* Téléphone */}
                    <div className="phone">
                        <Col>
                            <img src={phone} alt="Icône de téléphone" role="img"  />
                        </Col>
                        <Col>
                            <p>613-109-9876</p>
                        </Col>   
                    </div>

                    {/* Heures d'ouvertures */}
                    <div className="heuresOuvertures">
                        <h6 className='text-uppercase fw-bold mt-3'>{t('heures_ouvertures')}</h6>                    
                        <p className="m-0 mt-0">{t("heures_semaine")}
                            <br></br>
                            {t("heures_samedi")}
                            <br></br>
                            {t("heures_dimanche")}
                        </p>
                    </div>

                    {/* Médias */}
                    <div className="row">
                        <h6 className='text-uppercase fw-bold mb-2 mt-3'>{t("media")}</h6>
                    </div>

                    {/* Différents médias */}
                    <div className="row medias">
                        <div>
                            <OverlayTrigger
                                
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-btn">
                                        {t("tooltip_pinterest")}
                                    </Tooltip>
                                }
                            >
                                <a href='https://www.pinterest.ca/' className='me-2 text-reset'>
                                    <img src={pinterest} alt="Icône de pinterest" role="img" />
                                </a>
                            </OverlayTrigger>
                            
                            <OverlayTrigger
                                
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-btn">
                                        {t("tooltip_facebook")}
                                    </Tooltip>
                                }
                            >
                                <a href='https://www.facebook.com/' className='me-2 text-reset'>
                                    <img src={facebook} alt="Icône de facebook" role="img"  />
                                </a>
                            </OverlayTrigger>


                            <OverlayTrigger
                                
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-btn">
                                        {t("tooltip_twitter")}
                                    </Tooltip>
                                }
                            >
                                <a href='https://twitter.com/' className='me-2 text-reset'>
                                    <img src={twitter} alt="Icône de twitter" role="img" />
                                </a>
                            </OverlayTrigger>

                            <OverlayTrigger
                                
                                placement="bottom"
                                overlay={
                                    <Tooltip id="tooltip-btn">
                                        {t("tooltip_instagram")}
                                    </Tooltip>
                                }
                            >
                                <a href='https://www.instagram.com/' className='me-2 text-reset'>
                                    <img src={insta} alt="Icône de instagram" role="img" />
                                </a>
                            </OverlayTrigger>
                            
                            
                            
                        
                        </div>
                    </div>
                </div>

                {/* Liens rapide vers des pages importantes du site */}
                <div className="col g-lg-2">
                    <h6 className='text-uppercase fw-bold mb-2 mt-1'>{t("lien_rapide_titre")}</h6>
                    <div className="col centre">
                        <Link to="/about">{t("nav_about")}</Link>
                        <Link to="/service">{t("nav_no_services")}</Link>
                        <Link to="/equipe">{t("nav_about_team")}</Link>
                        <Link to="/contact">{t("nav_contactez_nous")}</Link>
                        <Link to="/reservation">{t("nav_booking_btn")}</Link>
                        <Link to="/exercice">{t("nav_exercices")}</Link>
                    </div>                
                </div>

                {/* Emplacement de la clinique */}
                <div className="col g-sm-6">
                    <iframe name="map" title="map" className="ps-2 pe-2 pt-1 w-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5886.136209237726!2d-75.68006989234236!3d45.419172838163696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce05a74e93237b%3A0x2e6c2c10b7581602!2sSITE%2C%20800%20King%20Edward%20Ave%2C%20Ottawa%2C%20ON%20K1N%206N5!5e0!3m2!1sen!2sca!4v1688066691066!5m2!1sen!2sca" width="500" height="300" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </section>
        </footer>
    );
}
 
export default Footer;