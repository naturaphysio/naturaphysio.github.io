// Importe de la librairie react-bootstrap
import { Accordion, Container } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";



const ServicesAdapte = () => {

    // Variables pour afficher de l'information
    const [typeServices, setTypeServices] = useState( [
        {titre: "Êtes-vous un nouveau client?", body: 'Nous vous conseillons de réservez une consultation afin de bien développer un plan d’adaptation pour vous.', bouton: 'Réservez une consultation', btnRef: '/reservation', id: 1},
        {titre: "Êtes-vous un client régulier?", body: 'Veuillez voir les différents services que l’on offre.', bouton: 'Voir les différents services offerts', btnRef: '/service', id: 2}
    ]);

    return ( 

        <div className="typeServicesClasse row w-75 mx-auto">
            <h2 className="text-center pt-4 pb-3">Nos types de services, adapté pour vous</h2>
            <Container>
                <div className="typeServices pb-5">

                    {/* Affiche les services adaptees aux clients, a l'aide d'un accordeon. */}
                    {typeServices.map((typeService) => (
                        <div className="typeServicesCartes" key={typeService.id}>

                            <Accordion>
                                <Accordion.Item eventKey={typeService.id}>

                                    {/* Titre de l'element */}
                                    <div className="typeServices-titre">
                                        <Accordion.Header>{typeService.titre}</Accordion.Header>
                                    </div>

                                    {/* Information sur l'element */}
                                    <div className="typeServices-body">
                                    <Accordion.Body className="pb-2">{typeService.body}
                                        <div className="typeServices-btn">
                                        
                                            {/* Bouton qui redirige l'utilisateur */}
                                            <a href={typeService.btnRef} onClick={() => {
                                                if (typeService.id == 1) {
                                                    localStorage.setItem('service', typeService.id);
                                                }
                                            }}><button className="btn mt-4 mb-2">{typeService.bouton}</button></a>
                                        </div>
                                    
                                    </Accordion.Body>
                                    </div>

                            
                                </Accordion.Item>

                            </Accordion>

                        </div>
                    ))}
                </div>
            </Container>
        </div>
     );
}
 
export default ServicesAdapte;