// Importe les fichiers
import ContactezNous from "./ContactezNous";
import ContactForm from "./ContactForm";


const Contact = () => {
    return ( 
        <div>
            {/* Composantes de la page de contact */}
            <ContactezNous/>

            {/* Formulaire de contact */}
            <ContactForm/>
        </div>
     );
}
 
export default Contact;