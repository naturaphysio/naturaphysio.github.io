// Importe de la librairie react
import {Container, Modal } from "react-bootstrap";
import React, { useEffect } from "react";
import { useState } from "react";

// Fichiers
import { data_equipe_physio } from "../../Equipe/physio_data";
import { time_slots_data } from "../Page1/time_slots_data";
import { Link } from "react-router-dom";

const Confirmation = ({setFormData, formData}) => {

    // Variable
    const [dateRdv, setDateRdv] = useState([]);

    // useEffect(() => {
    //     // Reset le storage local 
    //     localStorage.clear();
    //     setFormData(...formData, "");
    // });

    /**
     * Cette fonction est appelé afin d'afficher la date et l'heure sélectionnée
     * par l'utilisateur sur la page de réservation. Elle convertit les valeurs
     * entrées afin de créer une date qui correspond à ces valeurs afin d'afficher
     * la date et l'heure sous la forme : Lundi 10 Juin 2023 à 11h30.
     * @param {*} tempsSelectionnee
     */
    function getDateAndTime(dateChoisi, temps) {

        let newDate = new Date(dateChoisi);
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();
        let newTime = '';
        let pro = '';

        // Constantes pour les jours de la semaine et les mois dans une année
        const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
        const mois = ["Janvier", "Février", "Mars", "Avil", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        time_slots_data.find((data) => { if ((data.id) == temps) { newTime = data.value}})

        // Trouve le professionel
        data_equipe_physio.find((data) => { if ((data.id-1) == formData.professionel) { pro = data.nom}})
        
        // Insère la date et heure sous forme: Lundi 10 Juin 2023 à 11h30.
        let tmpText = jours[newDate.getDay()] + " " + date + " " + mois[month] + " " + year + " à " + newTime + " avec " + pro;
        setDateRdv(tmpText);
        console.log("la date est: " + tmpText);
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getDateAndTime(formData.dateRdv, formData.heure);

    }, [dateRdv]);

    return (
        <div>
            <Container className="reservation-confirmation">
                
                {/* Titre de la page */}
                <div className="titre-reservation-confirmation">
                    <h2>CONFIRMATION</h2>

                </div>

                {/* Message de confirmation de la réservation */}
                <div className="details-reservation-confirmation">
                    <p>
                        Bonjour {formData.prenom},
                        <br />
                        Votre réservation a été reçue et confirmée.
                        <br/>
                        Une confirmation de votre réservation vous a été envoyée à l'addresse courriel suivante : {formData.courriel}
                    </p>
                    <h2>DÉTAILS</h2>
                    <p>
                        Le rendez aura lieu le {dateRdv}.
                    </p>

                    {/* Reponses aux questions si c'est un nouveau patient */}
                    {(formData.estNouveauPatient == true) ? 
                    <div>
                        <p>Voici vos réponses aux questions suivantes. </p>
                        <p className="mt-3 mb-0">Veuillez brièvement expliquer vos problèmes.</p>
                        <p className="text-muted">{formData.explicationProbleme}</p>
                        <p className="mt-3 mb-0">Quand et où avez-vous remarqué vos douleurs pour la première fois?</p>
                        <p className="text-muted">{formData.remarqueDouleur}</p>
                    </div>
                    : null
                    }
                    <p>Si vous avez à apporter des changements ou à annuler votre réservation plus tard, veuillez
                        <br/>
                        nous rejoindre au 613-109-9876.
                        <br/>
                        Pour annuler votre réservation maintenant :
                    </p>

                    <button className="btn" onClick={handleShow} type="button">Annuler le rendez-vous</button>

                    <br/><br/><br/>

                    <p>Dans le cas d'une annulation à moins de 24h d'avis, des fraits seront exigés.  </p>
                </div>

                <Link to="/"><button className='btn' role="button">Retour à la page d'accueil</button></Link>
                {/* <a href="/"><button className='btn' role="button">Retour à la page d'accueil</button></a> */}
                
                {/* Si l'utilisateur annule son rendez-vous, le modal est affiché */}
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header >
                    <Modal.Title>L'annulation de votre rendez-vous a été effectué avec succès</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Bonjour {formData.prenom},
                        <br/>
                        Un courriel vous a été envoyé confirmant l'annulation de votre réservation à l'adresse courriel suivante : {formData.courriel}
                        <br/>
                        Si vous avez des questions, n'hésitez pas à nous rejoindre par téléphone : 613-109-9876
                        <br/><br/>
                        - Équipe NATURA physio
                    </Modal.Body>
                    
                    <Modal.Footer className="justify-content-start">
                        <Link to="/"><button className="btn" onClick={handleClose} role="button">Retour à la page d'accueil</button></Link>
                        {/* <a href="/"><button className="btn" onClick={handleClose} role="button">Retour à la page d'accueil</button></a> */}
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
     );
}

export default Confirmation;