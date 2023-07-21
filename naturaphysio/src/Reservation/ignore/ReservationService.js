// Importation de react & bootstrap
import { Col, Container } from "react-bootstrap";
import { useState } from "react";
import * as React from 'react';
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

// Importation de components
import DatePicker from "react-datepicker";
import HeuresDisponibles from "../Page1/HeuresDisponibles";
import SelectionProfessionel from "./SelectionProfessionel";
import SelectionService from "../Page1/SelectionService";

const ReservationService = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState(null);

    // States
    const [dateRdv, setDateRdv] = useState('');
    return (
        <div>
            <Container className="reservation-services">

                {/* Section service */}
                <div className="titre-reservation-services">
                    <h2>SERVICES</h2>
                    <p>Veuillez sélectionner un service, un membre de notre équipe et choisir une date et une heure qui vous convient afin de poursuivre la réservation de votre séance. </p>
                </div>

                {/* <Form> */}


                <div className="selection">

                    {/* Liste deroulante pour selectionner un service */}
                    <SelectionService/>

                    {/* Liste deroulante pour selectionner un professionel */}
                    <SelectionProfessionel/>


                </div>

                <div className="date-time">
                    <Col>
                        <p>Sélectionnez une date</p>
                        {/* Affiche le calendrier */}
                        <DatePicker
                            placeholderText="dd/mm/yyyy"
                            selected={startDate}
                            onChange={(date) => {
                                console.log("calendar close")
                                setStartDate(date);
                                setVisible(true);
                                setActive(null);
                                console.log("change in reservation");
                            }}
                            // value={startDate}
                            minDate={moment().toDate()} onKeyDown={(e) => { e.preventDefault()}}
                            onCalendarOpen={() => {
                                setVisible(false);
                                console.log("calendar open");
                            }}
                        />

                        {/* Affiche les heures disponibles */}
                        {(visible == true) ? <HeuresDisponibles active={active} dateChoisi={startDate} /> : null }

                    </Col>
                </div>



                {/* </Form> */}

            </Container>


        </div>
     );
}

export default ReservationService;




// export default function BasicTimePicker() {
//   return (

//   );
// }
