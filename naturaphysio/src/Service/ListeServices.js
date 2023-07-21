import { Link } from "react-router-dom";



const ListeServices = ({id, name, description, duree, image, prix, type, formData, setFormData}) => {

    const handleClickBtnService = (nom) => {

        // Storage local de la valeur afin de la réutiliser plus tard
        localStorage.setItem("service", nom);
    }

    return ( 
        <div className=" card-services w-100 border-1">
            <div className="card-body w-100 card-body-services p-3 shadow-none">

                {/* Affiche les services */}
                <div className="body-service ">

                    <div className="col-sm-8 col-md-4">
                        <img className="w-100" src={image} alt="Image du service"/>
                    </div>
                    <div className="col-sm-12 col-md-8 p-3 pt-0 pb-0">

                        {/* Titre du service */}
                        <div className="card-title">
                            <h5>{name}</h5>
                        </div>

                        {/* Éléments importantes du service */}
                        <p className="pt-0 pb-2 text-muted">
                            Durée: {duree} <br/>
                            Prix: {prix} <br/>
                            Type de service: {type}
                        </p>

                        {/* Description du service */}
                        <p className="pb-2">
                            Description: <br/>{description}
                        </p>
                        
                        {/* Bouton qui réserve le service */}
                        <Link to="/reservation">
                            <button 
                                className="btn"
                                role="button"
                                onClick={() => {
                                    handleClickBtnService(id);
                                }}
                            >Réservez un rendez-vous</button></Link>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default ListeServices;