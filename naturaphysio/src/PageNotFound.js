import { Link } from "react-router-dom";

const PageNotFound = () => {
    return ( 
        <div className="physio w-75 mx-auto pb-5 pt-3">

            {/* Titre de la page */}
            <div className="equipe ps-3 pe-3">
                <div className="row">
                    <h2>Erreur 404. Page non trouvé</h2>
                    <hr className="ps-3 pe-3"></hr>
                </div>

                <div className="row pt-5 pb-2 ms-2">
                    Il semble s'être produit un problème. Nous sommes désolé pour cet inconvénient. 
                </div>
                <div className="row ms-2 pb-5">Veuillez retourner à la page d'accueil du site.</div>
                <Link to="/" className="ms-2"><button className="btn">Retour à la page d'accueil</button></Link>
            </div>
        </div>
     );
}
 
export default PageNotFound;