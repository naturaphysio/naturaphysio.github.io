// Importe de la librairie react
import { Container, Row } from "react-bootstrap";

// Fichier
import Confirmation from "./Confirmation";

const Page3 = ({setFormData, formData}) => {
    return (
        <div className="page3">
            <Container>

                {/* Titre de la page */}
                <Row>
                    <h2>RÉSERVATION </h2>
                    <hr></hr>
                </Row>

                {/* Affiche un message de confirmation que la réservation a été effectué avec succès */}
                <Confirmation setFormData={setFormData} formData={formData}/>
            </Container>
        </div>
     );
}

export default Page3;