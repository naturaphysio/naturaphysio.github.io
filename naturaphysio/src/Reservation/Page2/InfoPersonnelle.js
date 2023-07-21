// Importe de la librairie de react
import { useState } from "react";
import { Container, Form } from "react-bootstrap"
import { Lang, useFormInputValidation } from "react-form-input-validation";

// Fichier
import NouveauPatientForm from "./NouveauPatientForm";

const InfoPersonnelle = ({setFormData, formData, page, handleChange, handleChangeMinus}) => {

    const [newPatient, setNewPatient] = useState(false);
    const [fields, errors, form] = useFormInputValidation(
        {
            prenom: formData.prenom,
            nomFamille: formData.nomFamille,
            courriel: formData.courriel,
            telephone: formData.telephone,
            dateNaissance: formData.dateNaissance,
            adresse: formData.adresse,
            codePostal: formData.codePostal,
            aEtePatientDsPasse: formData.aEtePatientDsPasse,
            explicationProbleme: formData.explicationProbleme,
            remarqueDouleur: formData.remarqueDouleur,
            commentaireAdditionel: formData.commentaireAdditionel,
        },
        {
            prenom: "required",
            nomFamille: "required",
            courriel: "required|email",
            telephone:"required|numeric|digits_between:10,12",
            dateNaissance: "required|date",
            adresse: "required",
            codePostal: "required",
            aEtePatientDsPasse: "required",
            explicationProbleme: "required",
            remarqueDouleur: "required"
        }
    );

    // Langue du formulaire
    form.useLang(Lang.fr); 

    const handleChangePrenom = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, prenom: value});
    }

    const handleChangeNomFamille = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, nomFamille: value});
    }

    const handleChangeCourriel = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, courriel: value});
    }

    const handleChangeTelephone = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, telephone: value});
    }

    const handleChangeNouveauPatient = (e) => { setFormData({...formData, estNouveauPatient: !newPatient}); }
    const handleNewPatient = () => { setNewPatient(!newPatient); }

    const onSubmit = async (event) => {
        event.preventDefault();
        const isValid = await form.validate(event);
        if (isValid) {
            handleChange(1); // change la page
        }
    };


    return (
        <div>
            <Container className="reservation-infoPersonnelle">

                {/* Titre de la section */}
                <div className="titre-reservation-infoPersonnelle">
                    <h2>INFORMATION PERSONNELLE</h2>
                    <p>Veuillez entrer vos information personnelles afin de compléter votre réservation.</p>
                </div>

                <form 
                    className="reservation-page2-form"
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >
                    
                    <div className="page2-select">

                        {/* Prénom */}
                        <p>Prénom</p>
                        <input 
                            type="text"
                            name="prenom"
                            id="prenom"
                            aria-label="prenom"
                            onBlur={form.handleBlurEvent}
                            onChange={(e) => {
                                form.handleChangeEvent(e);
                                handleChangePrenom(e);
                            }}
                            value={fields.prenom}
                            // Pour override le nom de l'attribut
                            data-attribute-name="prénom"
                            data-async
                        />
                        <label className="error">
                            {errors.prenom ? errors.prenom : ""}
                        </label>

                        {/* Nom de famille */}
                        <p>Nom de famille</p>
                        <input 
                            type="text"
                            id="nomFamille"
                            name="nomFamille"
                            aria-label="nomFamille"
                            onBlur={form.handleBlurEvent}
                            onChange={(e) => {
                                form.handleChangeEvent(e);
                                handleChangeNomFamille(e);
                            }}
                            value={fields.nomFamille}
                            // Pour override le nom de l'attribut
                            data-attribute-name="nom de famille"
                            data-async
                        />
                        <label className="error">
                            {errors.nomFamille ? errors.nomFamille : ""}
                        </label>

                        {/* Courriel */}
                        <p>Courriel</p>
                        <input 
                            type="text"
                            id="courriel"
                            name="courriel"
                            aria-label="courriel"
                            onBlur={form.handleBlurEvent}
                            onChange={(e) => {
                                form.handleChangeEvent(e);
                                handleChangeCourriel(e);
                            }}
                            value={fields.courriel}
                            // Pour override le nom de l'attribut
                            data-attribute-name="courriel"
                            data-async
                        />
                        <label className="error">
                            {errors.courriel ? errors.courriel : ""}
                        </label>

                        {/* Téléphone */}
                        <p>Téléphone</p>
                        <input 
                            type="text"
                            id="telephone"
                            name="telephone"
                            aria-label="telephone"
                            onBlur={form.handleBlurEvent}
                            onChange={(e) => {
                                form.handleChangeEvent(e);
                                handleChangeTelephone(e);
                            }}
                            value={fields.telephone}
                            // Pour override le nom de l'attribut
                            data-attribute-name="téléphone"
                            data-async
                        />
                        <label className="error">
                            {errors.telephone ? errors.telephone : ""}
                        </label>

                        {/* Nouveau patient ou non */}
                        <Form.Check
                            type="checkbox"
                            label="Je suis un nouveau patient."
                            onClick={handleNewPatient}
                            name="newPatient"
                            checked={formData.estNouveauPatient}
                            onChange={handleChangeNouveauPatient}
                        />

                        {/* Formulaire pour les nouveaux patients */}
                    { (formData.estNouveauPatient === true) 
                        
                        ? <NouveauPatientForm 
                            setFormData={setFormData} 
                            formData={formData}
                            fieldsAdresse={fields.adresse}
                            errorsAdresse={errors.adresse}
                            fieldsCodePostal={fields.codePostal}
                            errorsCodePostal={errors.codePostal}
                            fieldsexplicationProbleme={fields.explicationProbleme}
                            errorsexplicationProbleme={errors.explicationProbleme}
                            fieldsremarqueDouleur={fields.remarqueDouleur}
                            errorsremarqueDouleur={errors.remarqueDouleur}
                            handleChangeEvent={form.handleChangeEvent} 
                            handleBlurEvent={form.handleBlurEvent}
                        /> 
                        : "" }

                    </div>

                    {/* Pour passer à l'étape précédente ou suivante */}
                    <div className="form-btn pt-4 pb-3">
                        <button value={page} className='btn' type="button" onClick={handleChangeMinus}>Retour à l'étape précédente</button>
                        <button value={page} className="btn" type="submit">Confirmer ma réservation</button>
                    </div>
                    
                </form>

            </Container>
        </div>
     );
}

export default InfoPersonnelle;