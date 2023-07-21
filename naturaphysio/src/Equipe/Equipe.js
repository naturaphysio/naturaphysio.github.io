import Physiotherapeutes from "./Physiotherapeutes";

const Equipe = ({setFormData, formData, handleClick}) => {
    return ( 
        <>
            {/* Affiche la liste de tout les membres de l'équipe de la clinique */}
            <Physiotherapeutes setFormData={setFormData} formData={formData} handleClick={handleClick}/>            
        </>
     );
}
 
export default Equipe;