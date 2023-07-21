import { Container } from "react-bootstrap"
import { Link } from "react-router-dom";

const AnnulationRdv = () => {


    return (
        <div className="annulationRdv">
            <Container className="reservation-confirmation">
                <div className="titre-reservation-confirmation">
                    <h2>L'ANNULATION DE VOTRE RÉSERVATION A ÉTÉ EFFECTUÉE AVEC SUCCÈS</h2>

                </div>

                <div className="details-reservation-confirmation">
                    <p>
                        Bonjour,
                        <br/>
                        Un courriel vous a été envoyé confirmant l'annulation de votre réservation.
                        <br/>
                        Si vous avez des questions, n'hésitez pas à nous rejoindre par téléphone : 613-109-9876
                        <br/><br/>
                        - Équipe NATURA physio
                    </p>

                </div>

                <div className="btnAnnulation">
                    <Link to="/"><button className="btn">Retour à la page d'accueil</button></Link>
                </div>

            </Container>
        </div>
     );
}

export default AnnulationRdv;