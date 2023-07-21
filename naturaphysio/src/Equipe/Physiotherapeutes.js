// Import de react-bootstrap
import { Row } from "react-bootstrap";
import React from "react";
import { useState } from "react";

// Fichier
import { data_equipe_physio } from './physio_data';
import { Link } from "react-router-dom";

const Physiotherapeutes = ({setFormData, formData}) => {

    const [physio, setPhysio] = useState( {
        equipe: data_equipe_physio
    })

    /**
     * Cette fonction est appelée lorsque l'utilisateur sélectionne
     * un bouton, sous un membre de l'équipe. Celui-ci sera redirigé
     * vers la page de réservation où le champ de saisie 'professionel'
     * sera rempli par défaut avec le nom du professionel qui aura été
     * sélectionné. 
     * @param {*} nom 
     */
    const handleClickBtnEquipe = (nom) => {
        // setFormData({...formData, professionel: nom});
        localStorage.setItem("professionel", nom);
    }

    return ( 
        <div className="physio w-75 mx-auto pb-5 pt-3">

            {/* Titre de la page */}
            <div className="equipe ps-3 pe-3" role="heading" aria-level="2">
                <Row>
                    <h2>NOTRE ÉQUIPE</h2>
                    <hr className="ps-3 pe-3"></hr>
                </Row>
            </div>

            {/* Affiche tout les membres de l'equipe */}
            {physio.equipe.map((key) => (
                <div key={key.id} className="physio_equipe mb-4">

                    {/* Image du professionel */}
                    <div className="col-lg-4 col-sm-8 image p-4">
                        <img src={key.image} alt="Photo du professionel" role="img" onError={e => e.target.style.display = 'none'} thumbnail="true" className="img-fluid shadow-5-strong shadow"/>
                    </div>
                        
                    <div className="col-lg-8 col-sm-12 p-4 pe-4 extraInfo" role="presentation">
                        
                        {/* Nom du professionel */}
                        <h2 className="white p-0" role="heading">{key.nom}</h2>
                        
                        {/* Type de profession */}
                        <div className="text-muted mb-3" role="presentation">{key.profession}</div>
                        
                        {/* Description/histoire */}
                        <div role="presentation">{key.description}</div>
                        
                        {/* Faire une reservation avec le professionel */}
                        <Link to="/reservation" className="ps-0">
                            <button 
                                role="button"
                                aria-label="Prendre un rendez-vous"
                                className="btn mt-3" 
                                onClick={()=> {
                                    handleClickBtnEquipe(key.id);
                                }}
                            >Prendre un rendez-vous avec {key.nom}</button></Link>                        
                    </div>
                </div>
            ))}
            
        </div>
     );
}
 
export default Physiotherapeutes;