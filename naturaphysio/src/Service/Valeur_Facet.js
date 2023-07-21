import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import React from "react";

function Valeur_Facet({name, miseAJourCategorie, facet}) {
    const [selection, setSelection] = useState(false)

    const handleChange = () => {
        setSelection(!selection);
    }

    useEffect(() => {
        miseAJourCategorie(facet, name, selection);
    }, [selection]);

    return (
        <Form.Check type="checkbox"
            label={name}
            value={selection}
            onChange={handleChange}
        />
    )
}

export default Valeur_Facet;