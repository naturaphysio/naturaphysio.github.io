// Importe des fichiers afin de les accéders
import SectionPrincipale from "./SectionPrincipale";
import Accomplissement from "./Accomplissement";
import SectionInfoExtra from "./SectionInfoExtra";
import ServicesAdapte from "./ServicesAdapte";
import ServicesAffiche from "./ServicesAffiche";

const Accueil = () => {

    return ( 
        <div className="accueil">

            {/* Image principale et titre descriptif du site */}
            <SectionPrincipale/>    
            
            {/* Icones qui démontre les accomplissement de la compagnie */}
            <Accomplissement/>

            {/* Section qui affiche une citation du mois */}
            <SectionInfoExtra/>

            {/* Section qui donne de la documentation pour les types de patients */}
            <ServicesAdapte/>

            {/* Affiche différentes options que la compagnie offre */}
            <ServicesAffiche/>

        </div>
     );
}
 
export default Accueil;