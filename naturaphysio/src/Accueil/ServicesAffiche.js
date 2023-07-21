import img_session from "../images/accueil/service_session.png";
import img_exercice from "../images/accueil/service_exercice.png";
import img_video from "../images/accueil/service_video.png";
import { Link } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const ServicesAffiche = () => {
    return ( 
        <div>
            <div className="row w-50 pb-5 mx-auto servicesAffiche">
                
                <h2 className="mb-3 text-center">Nous vous proposons une variété d'options</h2>

                {/* Services */}
                <div className="col-sm-12 col-md-2 p-3 pb-5 card-body">
                    <div className="row">
                        <img src={img_session} alt="Image de session" className="w-100" role="img"/>
                    </div>
                    <div className="row ">
                        <h2 className="mt-5">Sessions</h2>
                        <p className="mt-2 mb-2 pe-3 ps-3 text-muted">De nombreux services diversifiés et adapté à vos besoin sont offerts. Consulté la liste des services.</p>
                        
                        {/* Redirige sur la page des exercices */}
                        <OverlayTrigger
                           
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-btn">
                                    Redirigé sur la page Service
                                </Tooltip>
                            }
                        >
                            <a href='/service'><button className="btn">Voir les services</button></a>
                        </OverlayTrigger>
                        
                    </div>
                </div>

                {/* Videos d'exercices */}
                <div className="col-sm-12 col-md-2 p-3 pb-5 card-body">
                    <div className="row">
                        <img src={img_video} alt="Image de vidéos" className="w-100" role="img"/>
                    </div>
                    <div className="col">
                        <h2 className="mt-5">Vidéos</h2>
                        <p className="mt-2 mb-2 text-muted">De nombreux vidéos d'exercices diversifiés sont offerts. Consulté la liste des services.</p>
                        
                        {/* Redirige sur la page des exercices */}
                        <OverlayTrigger
                           
                            placement="bottom"
                            overlay={
                                <Tooltip id="tooltip-btn">
                                    Redirigé sur la page Exercice
                                </Tooltip>
                            }
                        >
                            <a href='/exercice'><button className="btn">Voir les vidéos</button></a>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ServicesAffiche;