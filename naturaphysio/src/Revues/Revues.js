// Importe de la librairie de react
import { Container, Row } from "react-bootstrap";

// Fichiers
import RevuesClient from "./RevuesClient";
import EcrireRevue from "./EcrireRevue";

const Revues = () => {
    return ( 
        <div>
            <Container className="w-75 mx-auto pb-5 pt-3">
                <div className="sectionAboutTravail row w-100 mx-auto justify-content-center pb-5 pt-3">

                    {/* Titre de la page */}
                    <div className="equipe ps-3 pe-3">
                        <Row>
                            <h2>REVUES</h2>
                            <hr className="ps-3 pe-3"></hr>
                        </Row>
                    </div>                

                    {/* Utilisateur peut écrire une revue */}
                    <EcrireRevue/>

                    <hr className="ps-3 pe-3 mt-5 mb-0 w-75"></hr>

                    {/* Affiche quelques revues */}
                    <RevuesClient/>
                </div>
            </Container>
        </div>
     );
}
 
export default Revues;