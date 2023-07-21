import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const BoutonProchain = ({index, path}) => {
    const boutonContinue = ["Passer à l'étape suivante", "Placer ma réservation"]


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

export default BoutonProchain;