// Importe de la librairie react
import { Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";

// Fichier
import InfoPersonnelle from "./InfoPersonnelle";

const Page2 = ({setFormData, formData, page, handleChange, handleChangeMinus}) => {

    const [test, setTest] = useState([]);


    useEffect(() => {
        console.log(test);
    }, [test])

    return (
        <div className="page2">
            <Container>

                <Row>
                    <h2>RÉSERVATION</h2>
                    <hr></hr>
                </Row>
                
                {/* Affiche le formulaire de la deuxième section de la page de réservation */}
                <InfoPersonnelle info={test} setFormData={setFormData} formData={formData} handleChange={handleChange} handleChangeMinus={handleChangeMinus} page={page}/>

            </Container>
        </div>

     );
}



export default Page2;