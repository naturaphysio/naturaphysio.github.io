// Importe de la bibliothèque react-bootstrap
import { Card, Container } from "react-bootstrap";

const SectionInfoExtra = () => {
    return ( 
        <div className="extraInfoClasse">
            <Container>
                
                {/* Affiche une citation du mois */}
                <div className="extraInfoContainer">

                    <Card.Body className="extraInfo p-5 border-0 shadow-none">
                        <h2 className="text-white pb-2 center">Citation du mois</h2>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}
                                C'est un processus très lent - deux pas en avant, un pas en arrière - mais j'avance petit à petit dans la bonne direction. 
                            </p>
                            <p className="blockquote-footer">
                                <cite title="Source Title">Rob Reiner</cite>
                            </p>
                        </blockquote>
                    </Card.Body>
                </div>      
            </Container>
        </div>

     );
}
 
export default SectionInfoExtra;