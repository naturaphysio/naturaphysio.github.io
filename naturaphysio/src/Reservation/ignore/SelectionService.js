import { useState } from "react";
import { data } from "../../Service/services_data";
import { Col, Form } from "react-bootstrap";

const SelectionService = () => {

    const [selectedService, setSelectedService] = useState('');

    return (
        <Col>
            <Form.Select name="selectionService" id="selectionService" aria-label="service"
            // onSelect={(e) => {
            //     setSelectedService(e.target.value);
            //     console.log(selectedService)
            // }}
            >
                <option style={{display:'none'}}>Veuillez sélectionner un service</option>
                {
                    data && data.map((value, i) => {
                        return (
                            <option value={i} key={i}>{value.name}</option>
                        )
                    })
                }
            </Form.Select>
        </Col>
     );
}

export default SelectionService;