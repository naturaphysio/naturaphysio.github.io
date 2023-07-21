// Librairies de react
import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import moment from 'moment';
import { getDay } from "date-fns";
import { frCA } from "date-fns/locale";
import { Lang, useFormInputValidation } from "react-form-input-validation";

// Fichier css pour date picker
import "react-datepicker/dist/react-datepicker.css";

// Fichiers
import { data } from "../../Service/services_data";
import { data_equipe_physio } from "../../Equipe/physio_data";
import HeuresDisponibles from "./HeuresDisponibles";


const Page1 = ({setFormData, formData, page, handleChange}) => {

    const [startDate, setStartDate] = useState(new Date());
    const [active, setActive] = useState(null);
    const [fields, errors, form] = useFormInputValidation(
        {
          service: formData.service,
          professionel: formData.professionel,
          dateRdv: formData.dateRdv,
          heure: formData.heure
        },
        {
          service: "required",
          professionel: "required",
          dateRdv: "required|date",
          heure:"required"
        }
    );

    // useEffect(() => {
    //     // Reset le storage local 
    //     console.log("localStorage cleared");
    //     localStorage.clear();
    // });

    // Langage qui sera utilisee si les champs comporte des erreurs
    form.useLang(Lang.fr);

    const handleChangeProfessionel = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, professionel: value});
    }

    const handleChangeService = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, service: value});
    }

    const handleChangeDate = (date) => {
        setFormData({...formData, dateRdv: date});
    }

    /**
     * Cette fonction permet d'afficher seulement les jours de la semaine
     * et les samedis dans le calendrier, comme jours disponibles. Les
     * dimanches sont disabled. 
     * 
     * @param {Date} date 
     * @returns - jours non disabled
     */
    const isNotSunday = (date) => {
        const day = getDay(date);
        return day !== 0;
    };

    /**
     * Cette fonction est appelee lorsque l'utilisateur veux passer
     * a la prochaine page pour la reservation. Seulement lorsque tout
     * les champs sont valides, on passe a la prochaine page.
     * @param {Event} event 
     */
    const onSubmit = async (event) => {
        event.preventDefault();
        const isValid = await form.validate(event);
        if (isValid) {
          handleChange(0);
        }
    };
    
    return (
        <div className="page1">
            <Container>

                {/* Titre de la page */}
                <Row>
                    <h2>RÉSERVATION</h2>
                    <hr></hr>
                </Row>

                <Container className="reservation-services">

                    {/* Section service */}
                    <div className="titre-reservation-services">
                        <h2>SERVICES</h2>
                        <p>Veuillez sélectionner un service, un membre de notre équipe et choisir une date et une heure qui vous convient afin de poursuivre la réservation de votre séance. </p>
                    </div>

                    <form
                        className="reservation-page1-form"
                        noValidate
                        autoComplete="off"
                        onSubmit={onSubmit}
                    >
                        {/* Sélection d'un service */}
                        <div className="page1-select">
                            <p>Sélectionner un service</p>

                            <select
                                id="service"
                                name="service"
                                aria-label="service"
                                size="md"
                                value={fields.service}
                                onChange={(e) => {
                                    form.handleChangeEvent(e);
                                    handleChangeService(e);
                                }}
                                onBlur={form.handleBlurEvent}
                            >
                                <option value="">--Sélectionner--</option>
                                {
                                    data && data.map((value, i) => {
                                        return (
                                            <option value={value.id} key={i}>{value.name}</option>
                                        )
                                    })
                                }
                            </select>
                            {/* Si une erreur c'est produite, affiche l'erreur */}
                            <label className="error">
                                {errors.service ? errors.service : ""}
                            </label>

                            {/* Sélection d'un professionel */}
                            <p>Sélectionner un professionel</p>
                                
                            <select
                                id="professionel"
                                name="professionel"
                                aria-label="professionel"
                                size="md"
                                value={fields.professionel}
                                onChange={(e) => {
                                    form.handleChangeEvent(e);
                                    handleChangeProfessionel(e);
                                }}
                                onBlur={form.handleBlurEvent}
                            >
                                <option value="">--Sélectionner--</option>
                                {
                                    data_equipe_physio && data_equipe_physio.map((value, i) => {
                                        return (
                                            <option value={value.id} key={i}>{value.nom}</option>
                                        )
                                    })
                                }
                            </select>
                            {/* Si une erreur c'est produite, affiche l'erreur */}
                            <label className="error">
                                {errors.professionel ? errors.professionel : ""}
                            </label>
                            
                            {/* Sélection d'une date */}
                            <div className="date-time">
                                <p>Sélectionnez une date</p>
                                <DatePicker
                                    selected={formData.dateRdv}
                                    onChange={(date, event) => {
                                        setStartDate(date);
                                        setActive(null);
                                        handleChangeDate(date)
                                    }}
                                    onBlur={form.handleBlurEvent}
                                    todayButton
                                    fixedHeight // Donne toujours la meme hauteur au calendrier
                                    filterDate={isNotSunday} // disables les dimanches
                                    locale={frCA}
                                    name="date"
                                    minDate={moment().toDate()} onKeyDown={(e) => { e.preventDefault()}}
                                    onCalendarOpen={() => {
                                    }}
                                />

                                <HeuresDisponibles 
                                    active={active} 
                                    dateChoisi={startDate} 
                                    setFormData={setFormData} 
                                    formData={formData} 
                                    fields={fields.heure} 
                                    errors={errors.heure} 
                                    handlechangeEvent={form.handleChangeEvent} 
                                    handleBlurEvent={form.handleBlurEvent}
                                />
                            </div>
                        </div>
                        
                        {/* Passe à l'étape suivante */}
                        <div className="form-btn pt-4 pb-3 justify-content-center">
                            <button value={page} className="btn" type="submit">Passer à l'étape suivante</button>
                        </div> 
                    </form>

                </Container>
            </Container>
        </div>

     );
}

export default Page1;