// Importe de la librairie de react
import { Container} from "react-bootstrap";
import React from "react";

// Fichier
import Valeur_Facet from "./Valeur_Facet";

function Facets_container({facets, miseAJourCategorie, effaceValeursFacet}) {
    return (
        <Container className="">

            {/* Affiche les titres des facets et leurs contenus */}
            {Object.entries(facets).map(([name, values]) =>
                <div className="row border mb-2 ms-0 w-100 p-2" key={values}>
                    <div className="row">
                        <div className="col">
                        {name.toUpperCase()}
                        </div>
                        {values.map((value, id) => (
                        <div className="row" key={id}>
                            <Valeur_Facet  name={value.name} miseAJourCategorie={miseAJourCategorie} facet={name}/>
                        </div>
                        ))}
                    </div>
                </div>
            )}
        </Container>
    )
}


export default Facets_container;
