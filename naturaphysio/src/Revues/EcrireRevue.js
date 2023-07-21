// Importe de la librairie react
import { Button, Form, Modal } from "react-bootstrap";
import { Rating } from 'react-simple-star-rating'
import { useState } from "react";
import { Lang, useFormInputValidation } from "react-form-input-validation";
import { Link } from "react-router-dom";

const EcrireRevue = () => {

    // Variables
    const [ratingRevue, setRatingRevue] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [show, setShow] = useState(false);

    // Méthodes
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
         
    const handleRating = (rate) => {
        setRatingRevue(rate);
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        const isValid = await form.validate(event);
        if (isValid) {
            setSubmitting(true);
            handleShow();
        }
    };

    function submitClose(event) {
        handleClose();
    }

    // Lors d'erreurs quand il y a soumission du formulaire
    const [fields, errors, form] = useFormInputValidation(
        {
          titre: "",
          msg: ""
        },
        {
            titre: "required",
            msg: "required"
        }
    );
    
    // Language du formulaire
    form.useLang(Lang.fr);

    return ( 
        <>
            <h2 className="mb-3 mt-5 text-center">Écrire une revue</h2>
            <div className="col-sm-12 col-md-8">
                <form 
                    className="form-revues"
                    noValidate
                    autoComplete="off"
                    onSubmit={onSubmit}
                >

                    {/* Titre de la revue */}
                    <p>Donnez une revue pour NATURA physio par rapport à votre expérience.</p>
                    <p className="mt-3 mb-0">Titre de la revue</p>
                    <Form.Control
                        type="text" 
                        id="titre"
                        name="titre"
                        aria-label="titre"
                        placeholder="Titre" 
                        className="ms-0" 
                        onChange={(e) => {
                            form.handleChangeEvent(e);
                        }}
                        value={fields.titre}
                        onBlur={form.handleBlurEvent}
                        data-attribute-name="titre de la revue"
                        data-async
                    />
                    {/* Si une erreur se produit, affiche l'erreur */}
                    <label className="error">
                        {errors.titre ? errors.titre : ""}
                    </label>

                    <p className="mb-0">Le nombre d'étoiles que vous donneriez sur 5</p>
                    {/* Un rating sur 5 */}
                    <Rating
                        onClick={handleRating}
                    />
                    <br/>

                    {/* Message qui explique l'expérience de l'utilisateur */}
                    <p className="mt-3 mb-0">Comment était votre expérience?</p>
                    <Form.Control 
                        as="textarea" 
                        id="msg"
                        name="msg"
                        aria-label="msg"
                        placeholder="Message" 
                        className="ms-0" 
                        rows={5} 
                        value={fields.msg}
                        onBlur={form.handleBlurEvent}
                        onChange={(e) => {form.handleChangeEvent(e);}}
                        data-attribute-name="message"
                        data-async
                    />
                    {/* Si une erreur se produit, affiche l'erreur */}
                    <label className="error">
                        {errors.msg ? errors.msg : ""}
                    </label>

                    {/* Soumission de la revue */}
                    <div className="pt-3 center">
                        <button className="btn" type="submit" role="button" >Soumettre</button>

                    </div>
                    
                </form>
            </div>

            {/* Affiche le modal seulement lorsque utilisateur a cliquer le bouton soumettre */}
            {show && 
                <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
                >
                    <Modal.Header>
                        <Modal.Title>Votre revue a bien été reçu</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Merci d'avoir soumis une revue pour NATURA physio. 
                    </Modal.Body>
                    <Modal.Footer>
                        <Link to="/review">
                            <Button variant="secondary" onClick={submitClose}>Fermer</Button>
                        </Link>
                    </Modal.Footer>
                </Modal>
            }
        </>
     );
}
 
export default EcrireRevue;