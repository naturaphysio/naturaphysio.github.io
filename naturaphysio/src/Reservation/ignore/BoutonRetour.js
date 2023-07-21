import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoutonRetour = ({index, path}) => {

    const boutonContinue = ["Retour à l'étape précédente", "Retour à la page d'accueil"];

    return (
        <Col>
            {
                // boutonContinue && boutonContinue.slice(0, 2).map((item) => {
                    <Link to={path} className="btn"><button className="btn">{boutonContinue[index]}</button>
                    </Link>

                // })
            }
        </Col>
     );
}

export default BoutonRetour;