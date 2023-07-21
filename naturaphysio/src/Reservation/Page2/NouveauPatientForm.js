import { useState } from "react";
import { Form, Row } from "react-bootstrap";
import DatePicker from "react-datepicker";
import { frCA } from "date-fns/locale";

const NouveauPatientForm = ({
    setFormData, formData, 
    fieldsAdresse, errorsAdresse,
    fieldsCodePostal, errorsCodePostal,
    fieldsaEtePatientDsPasse,
    fieldsexplicationProbleme, errorsexplicationProbleme,
    fieldsremarqueDouleur, errorsremarqueDouleur,
    handleChangeEvent, handleBlurEvent
}) => {

    // Variables
    const [newPatient, setNewPatient] = useState(fieldsaEtePatientDsPasse);

    // Methodes
    const handleNewPatientFalse = () => { setNewPatient(false); }
    const handleNewPatientTrue = () => { setNewPatient(true); }

    const handleChangeDate = (date) => {
        setFormData({...formData, dateNaissance: date});
    }

    const handleChangeAdresse = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, adresse: value});
    }

    const handleChangeCodePostal = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, codePostal: value});
    }

    const handleChangePatientDsPassee = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, aEtePatientDsPasse: !newPatient});
    }

    const handleChangeExplicationProbleme = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, explicationProbleme: value});
    }

    const handleChangeRemarqueDouleur = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, remarqueDouleur: value});
    }

    return (
        <div className="form-nouveauPatient">
            <h2>NOUVEAU PATIENT</h2>
            <p>Voici un formulaire que vous avez à remplir afin de compléter votre réservation.</p>

            {/* Sélection de la date de naissance */}
            <p>Date de naissance</p>
            <DatePicker
                showMonthDropdown  // Montre liste deroulante pour les mois
                showYearDropdown // Montre liste deroulante pour les annees
                dropdownMode="select"
                onBlur={handleBlurEvent}
                maxDate={new Date()} // La date peut pas etre plus grande que celle d'aujourd'hui
                selected={formData.dateNaissance}
                onChange={(date, event) => {
                    handleChangeDate(date);
                    handleChangeEvent(event)
                }}
                locale={frCA}
                name="dateNaissance"
                id="dateNaissance"
                onCalendarOpen={() => {
                    console.log("calendar open");
                }}
            />
            
            <div className="form-adresse">

                {/* Adresse */}
                <p>Adresse</p>
                <input 
                    type="text"
                    id="adresse"
                    name="adresse"
                    aria-label="adresse"
                    onBlur={handleBlurEvent}
                    onChange={(e) => {
                        handleChangeEvent(e);
                        handleChangeAdresse(e);
                    }}
                    value={fieldsAdresse}
                    // Pour override le nom de l'attribut
                    data-attribute-name="adresse"
                    data-async
                />
                <label className="error">
                    {errorsAdresse ? errorsAdresse : ""}
                </label>

                {/* Code postal */}
                <p>Code postal</p>
                <input 
                    type="text"
                    id="codePostal"
                    name="codePostal"
                    aria-label="codePostal"
                    onBlur={handleBlurEvent}
                    onChange={(e) => {
                        handleChangeEvent(e);
                        handleChangeCodePostal(e);
                    }}
                    value={fieldsCodePostal}
                    // Pour override le nom de l'attribut
                    data-attribute-name="code postal"
                    data-async
                />
                <label className="error">
                    {errorsCodePostal ? errorsCodePostal : ""}
                </label>
            </div>

            <div className="form-nouvPatient-questions">
                <Row>
                    <Form.Label>Avez-vous été un de nos patient dans le passé?</Form.Label>
                    <Form.Check
                        inline
                        name="group1"
                        label='Oui'
                        type="radio"
                        id="radio-1" 
                        checked={formData.aEtePatientDsPasse}
                        onChange={handleChangePatientDsPassee}
                        onClick={handleNewPatientTrue}/>
                    <Form.Check
                        inline
                        name="group1"
                        label='Non'
                        type="radio"
                        id="radio-2" 
                        checked={!formData.aEtePatientDsPasse}
                        onChange={handleChangePatientDsPassee}
                        onClick={handleNewPatientFalse}/>
                </Row>

                <p className="mt-4">Veuillez brièvement expliquer vos problèmes.</p>
                {/* Question 1 */}
                <Form.Control
                    as="textarea"
                    id="explicationProbleme"
                    name="explicationProbleme"
                    aria-label="explicationProbleme"
                    rows={4}
                    placeholder='Explications...'
                    value={fieldsexplicationProbleme}
                    onChange={(e) => {
                        handleChangeExplicationProbleme(e);
                        handleChangeEvent(e);
                    }}
                    onBlur={handleBlurEvent}
                    data-attribute-name="explication du probleme"
                    data-async
                    />
                <label className="error">
                    {errorsexplicationProbleme ? errorsexplicationProbleme : ""}
                </label>

                {/* Question 2 */}
                <p >Quand et où avez-vous remarqué vos douleurs pour la première fois?</p>
                <Form.Control
                    as="textarea"
                    id="remarqueDouleur"
                    name="remarqueDouleur"
                    aria-label="remarqueDouleur"
                    rows={4}
                    value={fieldsremarqueDouleur}
                    onChange={(e) => {
                        handleChangeRemarqueDouleur(e);
                        handleChangeEvent(e);
                    }}
                    onBlur={handleBlurEvent}
                    data-attribute-name="remarque de la douleur"
                    data-async
                    />
                <label className="error">
                    {errorsremarqueDouleur ? errorsremarqueDouleur : ""}
                </label>

            </div>
        </div>
     );
}

export default NouveauPatientForm;