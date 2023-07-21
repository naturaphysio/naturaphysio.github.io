// Importe des composantes de la librairie react-bootstrap
import { Container, Row } from 'react-bootstrap';

// Importe des images
import imagePrincipale from '../images/about_image1.png';
import image2 from '../images/about_image2.png';

// Importe une composante
import PrquoiSection from './PrquoiSection';


const About = () => {
    return ( 
        <Container className='aPropos'>

            {/* Image principale */}
            <div className="image">
                <Row>
                    <img src={imagePrincipale} alt="Image principale de la page à propos" className='w-100' role='img' />
                </Row>
            </div>

            <div className="about w-75 mx-auto pb-2 pt-3">
                <div className='equipe ps-3 pe-3'>

                    {/* Titre de la page */}
                    <div className='row'>
                        <h2>À PROPOS</h2>
                        <hr className='ps-3 pe-3'></hr>
                    </div>
                </div>

                {/* A propos de la compagnie */}
                <div className="aboutUsContainer">
                    <div className="col-sm-8 col-lg-4 p-4">
                        <img src={image2} alt="Image d'exercice" role='img' className='w-100'/>
                    </div>

                    {/* Description */}
                    <div className="col-sm-12 col-lg-8 p-4 ps-2">
                        <p>Chez NATURA physio, nous sommes fiers d'avoir des physiothérapeutes et massothérapeutes expérimentés. 
                            <br/><br/>
                            Notre équipe évalueront et traiteront votre blessure dans une atmosphère agréable et détendue. 
                            Nous offrons une grande variété de services et de traitement uniques à nos cliniques, y compris la 
                            thérapie manuelle, l'acupuncture, la massothérapie, le dry needling et l'aquathérapie. 
                            <br/><br/>
                            Notre mission est d'être le meilleur établissement de physiothérapie et de réadaptation de la ville 
                            et de répondre à vos besoins et vous offrant des services adaptés. 
                            <br/><br/>
                            L'atmosphère détendue de nos cliniques offre un environnement idéal pour se remettre d'une blessure. 
                            <br/><br/>
                            Notre but est de faire en sorte que nos clients se sentent à l'aise afin que notre équipe discute 
                            de leurs préoccupations avec eux, afin de nous assurer que leurs attentes sont satisfaites.
                            <br/></p>
                        <button className='btn' role="button" aria-placeholder='Bouton qui mène sur la page de réservation'>Réservez un rendez-vous</button>
                    </div>
                </div>
            </div>
            
            {/* Section de widgets */}
            <PrquoiSection/>


            <div className='videoAboutUs'>
                <div className="video">**VIDÉO À venir dans la version finale</div>
            </div>
        
        </Container>
     );
}
 
export default About;