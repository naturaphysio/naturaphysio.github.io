// Importe de la librairie react
import { useState } from 'react';

// Fichiers
import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import BarreDeProgression from './BarreDeProgression';
import { StepperContext } from './StepperContext';


const Reservation = ({setFormData, formData}) => {

  // Variables
  const [page, setPage] = useState(0);
  const [userData, setUserData] = useState('');
  const [finalData, setFinalData] = useState([]);

  // Affiche les pages
  const displayPage = (step) => {
    switch (step) {
      case 0:
        return <Page1 setFormData={setFormData} formData={formData} handleChange={handleChange} page={page}/>
      case 1:
        return <Page2 setFormData={setFormData} formData={formData} handleChange={handleChange} page={page} handleChangeMinus={handleChangeMinus}/>
      case 2:
        return <Page3 setFormData={setFormData} formData={formData}/>
      default:
    }
  }

  /**
   * Cette fonction augmente le numéro de la 
   * page, afin de passer à la prochaine page
   * @param {Number} number 
   */
  const handleChange = (number) => {
    console.log(Number(number) +1);
    setPage(Number(number) +1);
  }

  /**
   * Cette fonction diminue le numéro de la page 
   * afin de passer à la page précédente.
   * @param {Number} e 
   */
  const handleChangeMinus = (e) => {
    console.log(Number(e.target.value) - 1);
    setPage(Number(e.target.value) - 1);
  }

  return (

    <div className="contentReservation pb-5">

        {/* Affiche la barre de progression avec son état */}
        <BarreDeProgression etat={page}/>

        {/* Donne un stepper context */}
        <StepperContext.Provider value={{
          userData,
          setUserData,
          finalData,
          setFinalData
        }}>
        {displayPage(page)}
        </StepperContext.Provider>
    </div>

    );
}

export default Reservation;