// Importe de la librairie react
import { Col, Row } from "react-bootstrap";
import Valeur_Facet from "./Valeur_Facet";
import React from "react";

function Facet({name, values, miseAJourCategorie}) {
    return (
        <>  
            {/* Nom */}
            <Row>  
                <Col>{name}</Col>
            </Row>
            {Object.entries(values).map(([value, idx]) => (
                <Row key={idx}>
                    <Valeur_Facet  name={value.name} miseAJourCategorie={miseAJourCategorie} facet={name}/>
                </Row>
            ))}
        </>
    );
}

export default Facet;