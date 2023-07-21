// Importe de la librairie de react-bootstrap
import Form from 'react-bootstrap/Form';

function FormulaireContact() {

  return (
    <Form className='formulaireContact'>

      {/* Prenom */}
      <div className="row">
          <Form.Control placeholder="Prénom" required />        
      </div>

      {/* Nom de famille */}
      <div className="row">
        <Form.Control placeholder="Nom de famille" required />
      </div>

      {/* Courriel */}
      <div className="row">
        <Form.Control placeholder='Courriel' required />
      </div>

      {/* Message */}
      <div className="row">
        <Form.Control as="textarea" style={{fontFamily:"Arial"}} rows={5} placeholder='Message' required />
      </div>
      
      <button className='btn white' type='sumbit'>Soumettre</button>
    </Form>
  );
}

export default FormulaireContact;