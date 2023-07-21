// Importe de la librairie de react-bootstrap
import { useEffect, useState, useContext } from "react";
import { time_slots_data } from "./time_slots_data";
import { StepperContext } from "../StepperContext";


function HeuresDisponibles({active, dateChoisi, setFormData, formData, fields, errors, handlechangeEvent, handleBlurEvent}){

    const [date, setDate] = useState(dateChoisi);    

    // Liste contenant les heures d'ouvertures
    const [openHours, setOpenHours] = useState([]);

    // Date
    const [textDate, setTextDate] = useState([]);

    // Filtre les heures d'ouvertures
    function filtre(date) {

        let newDate = new Date(date);

        // Trouve le jour de la semaine
        if (newDate.getDay() == 6) {

            // Samedi
            // Liste des heures disponibles du samedi
            const satHours = time_slots_data.filter(hours => {
                return hours.saturday == true;
            });


            setOpenHours(satHours);
        } else if (newDate.getDay() == 0) {

            // Dimanche -> pas ouvert
            setOpenHours(null);
            setTextDate("Désolé. Nous sommes fermé le dimanche. Veuillez choisir une autre date.");
        } else {

            // Jour de semaine
            // Liste des heures disponibles des jours de la semaine
            const weekHours = time_slots_data.filter(hours => {
                return hours.weekday == true;
            });

            setOpenHours(weekHours);
        }
    }

    /**
     * Cette fonction est appelé afin d'afficher la date et l'heure sélectionnée
     * par l'utilisateur sur la page de réservation. Elle convertit les valeurs
     * entrées afin de créer une date qui correspond à ces valeurs afin d'afficher
     * la date et l'heure sous la forme : Lundi 10 Juin 2023 à 11h30.
     * @param {*} tempsSelectionnee
     */
    function getDateAndTime(dateChoisi, temps) {

        let newDate = new Date(dateChoisi);
        let date = newDate.getDate();
        let month = newDate.getMonth();
        let year = newDate.getFullYear();

        // Constantes pour les jours de la semaine et les mois dans une année
        const jours = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
        const mois = ["Janvier", "Février", "Mars", "Avil", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];

        // Insère la date et heure sous forme: Lundi 10 Juin 2023 à 11h30.
        let tmpText = jours[newDate.getDay()] + " " + date + " " + mois[month] + " " + year + " à " + temps;
        setTextDate("Votre rendez-vous sera le " + tmpText);
    }

    useEffect(() => {
        filtre(date);
    }, [date])


    const handleChangeHeure = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, heure: value});
    }

    return (
        <>
            <div className='slots'>

                {/* Sélection d'une heure */}
                <p>Sélectionnez une heure</p>            
                <select
                    id="heure"
                    name="heure"
                    aria-label="heure"
                    size="md"
                    value={fields}
                    onChange={(e) => {
                        handlechangeEvent(e);
                        handleChangeHeure(e);
                    }}
                    onBlur={handleBlurEvent}
                >
                    <option value="">--Sélectionner--</option>
                    {
                        openHours && openHours.map((item, i) => {
                            return (
                                <option value={i} key={i}>{item.value}</option>
                            )
                        })
                    }
                </select>
                {/* Si une erreur c'est produite, affiche l'erreur */}
                <label className="error">
                    {errors ? errors : ""}
                </label>
                
            </div>
        </>

    );
}

export default HeuresDisponibles;