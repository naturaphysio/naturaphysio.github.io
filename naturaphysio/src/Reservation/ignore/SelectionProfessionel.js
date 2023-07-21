import { Col, Form } from "react-bootstrap";
import { data_equipe_physio } from "../../Equipe/physio_data";
import { data_equipe_masso } from "../../Equipe/masso_data";
import { useEffect, useState } from "react";


const SelectionProfessionel = () => {

    // Liste qui contient tout les noms des professionels
    const [equipe, setEquipe] = useState([]);

    useEffect(() => {

        mergeEquipe();

    }, [1])


    function mergeEquipe() {

        // Fait un merge des listes de toute l'equipe
        setEquipe([...data_equipe_physio, ...data_equipe_masso]);
    }

    return (
        <Col>
            <Form.Select aria-label="professionel">
                <option style={{display:'none'}}>Veuillez choisir un professionel</option>

                {
                    equipe && equipe.map((value, i) => {
                        return (
                            <option value={i} key={i}>{value.nom}</option>
                        )
                    })
                }
            </Form.Select>
        </Col>
     );
}

export default SelectionProfessionel;