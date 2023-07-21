// Importe de la librairie de react
// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { useState } from 'react';

// Fichiers
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Accueil from './Accueil/Accueil';
import Services from './Service/Services';
import About from './About/About';
import Equipe from './Equipe/Equipe';
import Contact from './Contact/Contact';
import Reservation from './Reservation/Reservation';
import FAQ from './Aide/FAQ';
import Revues from './Revues/Revues';
import Exercice from './Exercice/Exercice';
import AssistantAide from './Aide/AssistantAide';


function App() {
  
  // Variables
  const [formData, setFormData] = useState({
    service: "",
    professionel: localStorage.getItem("professionel"),
    dateRdv: new Date(),
    heure: "",
    prenom: "",
    nomFamille: "",
    courriel: "",
    telephone: "",
    estNouveauPatient: false,
    dateNaissance: new Date(),
    adresse: "",
    codePostal: "",
    aEtePatientDsPasse: false,
    explicationProbleme: "",
    remarqueDouleur: "",
    commentaireAdditionel: "",
  });

  // Méthode
  const handleClickBtnEquipe = (nom) => {
    setFormData({...formData, professionel: nom});
  }
  
  return (
    
    <Router>
      <div className="App">

        {/* Barre de navigation */}
        <Navbar/>

        {/* Différentes pages du site */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Accueil/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/service">
              <Services setFormData={setFormData} formData={formData}/>
            </Route>

            <Route path='/review'>
              <Revues/>
            </Route>

            <Route exact path="/equipe">
              <Equipe setFormData={setFormData} formData={formData} handleClick={handleClickBtnEquipe} />
            </Route>

            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path='/reservation' exact>
              <Reservation setFormData={setFormData} formData={formData} />
            </Route>

            <Route path='/aide'>
              <FAQ/>
            </Route>

            <Route path="/chatbot">
              <AssistantAide/>
            </Route>

            <Route path="/exercice">
              <Exercice/>
            </Route>

            <Redirect to="/"/>

          </Switch>
        </div>
        
        {/* Pied de page du site */}
        <Footer/>
        
      </div>
    </Router>
    
    
  );
}

export default App;



{/* <Router>
      <div className="App">

        <Navbar/>

        <div className="content">
          <Switch>
            <Route exact path="/">
              <Accueil/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/service">
              <Services setFormData={setFormData} formData={formData}/>
            </Route>

            <Route path='/review'>
              <Revues/>
            </Route>

            <Route exact path="/equipe">
              <Equipe setFormData={setFormData} formData={formData} handleClick={handleClickBtnEquipe} />
            </Route>

            <Route path="/contact">
              <Contact/>
            </Route>

            <Route path='/reservation' exact>
              <Reservation setFormData={setFormData} formData={formData} />
            </Route>

            <Route path='/aide'>
              <FAQ/>
            </Route>

            <Route path="/chatbot">
              <AssistantAide/>
            </Route>

            <Route path="/exercice">
              <Exercice/>
            </Route>

          </Switch>
        </div>
        
        <Footer/>
        
      </div>
    </Router> */}
