// Importe des images
import img_flexible_booking from "../images/about/booking.png";
import img_personalized_care from "../images/about/heart.png";
import img_supportive from "../images/about/hand.png";
import img_exceptional from "../images/about/medal.png";

const PrquoiSection = () => {
    return ( 

        <div>
            <h3 className="mb-3 text-center" role="heading">Pourquoi travailler avec nous ?</h3>
            <div className="sectionAboutTravail row w-100 mx-auto justify-content-center pb-5">

                {/* Enacadré 1 */}
                <div className="col-sm-12 col-md-5 card p-3 m-2 rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <div className="col-3 p-2">
                                <img src={img_flexible_booking} alt="Image de réservation flexible" className="w-100 rounded-5" role="img"/>
                            </div>
                            <div className="col-8 p-2 pb-1">
                                    <h4>Des rendez-vous flexible</h4>
                                    <p className="ps-1">Nous comprenons que vous êtes occupé et nous voulons accomoder votre 
                                        horaire en vous proposant une accès facile à notre système de réservation de rendez-vous en ligne.
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Encadré 2 */}
                <div className="col-sm-12 col-md-5 m-2 p-3 card rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <div className="col-3 p-2">
                                <img src={img_exceptional} alt="Image de satisfaction exceptionnelle" className="w-100 rounded-5" role="img"/>
                            </div>
                            <div className="col-8 p-2 pb-1">
                                <h4>Une satisfaction exceptionnelle</h4>
                                <p className="ps-1">Vos revues démontrent notre engagement et notre dédication
                                à fournir des soins exceptionnels qui permettent d'améliorer la qualité de vie de
                                vos vies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Encadré 3 */}
                <div className="col-sm-12 col-md-5 m-2 p-3 card rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <div className="col-3 p-2">
                                <img src={img_personalized_care} alt="Image de soins personnalisés" className="w-100 rounded-5" role="img"/>
                            </div>
                            <div className="col-8 p-2 pb-1">
                                <h4>Des soins personnalisés</h4>
                                <p className="ps-1">Chez NATURA physio, nous offrons plusieurs services adaptés pour vous,
                                selon votre âge et votre niveau d'activité et selon vos besoins. Nous garantissons des
                                résultats.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Encadré 4 */}
                <div className="col-sm-12 col-md-5 m-2 p-3 card rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <div className="col-3 p-2">
                                <img src={img_supportive} alt="Image d'un environnement favorable" role="img" className="w-100 rounded-5"/>
                            </div>
                            <div className="col-8 p-2 pb-1">
                                <h4>Un environnement favorable</h4>
                                <p className="ps-1">Nos installations modernes et notre personnel accueillant créent une
                                atmosphère favorable qui vous permet de rester positif envers votre guérison et votre 
                                développement personnel.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default PrquoiSection;