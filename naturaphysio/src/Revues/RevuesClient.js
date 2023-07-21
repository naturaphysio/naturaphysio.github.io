// Importe de la librairie de react
import { Rating } from 'react-simple-star-rating'

const RevuesClient = () => {
   
    return ( 
        <div>
            <div className="sectionAboutTravail row w-100 mx-auto justify-content-center pb-5 pt-3">
                
                <h2 className="mb-3 mt-5 text-center">Certaines de nos meilleures revues</h2>

                {/* Affiche revue 1 */}
                <div className="col-sm-12 col-md-5 card p-3 m-2 rounded-5 shadow border-0">
                    
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <Rating
                                initialValue="5"
                                disableFillHover="true"
                                readonly="true"
                                /* Available Props */
                            />
                        </div>
                    </div>
                    <hr className="ps-3 pe-3"></hr>
                    <div className="row-sm-12 row-md-6">
                        <h4>Les besoins des clients sont leur priorité</h4>
                        <p className="text-muted">
                            L'équipe de NATURA physio ont toujours été flexibles et mettent les besoins 
                            et le confort de leurs clients en priorité. Leur équipe est extrèmement passionnée
                            et ils offrent des services de qualité.
                        </p>
                    </div>
                </div>

                {/* Affiche revue 2 */}
                <div className="col-sm-12 col-md-5 card p-3 m-2 rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <Rating
                                initialValue="5"
                                disableFillHover="true"
                                readonly="true"
                                /* Available Props */
                            />
                        </div>
                    </div>
                    <hr className="ps-3 pe-3"></hr>
                    <div className="row-sm-12 row-md-6">
                        <h4>Une atmosphère et équipe très acceuillante</h4>
                        <p className="text-muted">
                            Des services exceptionnels sont données. L'équipe est très acceuillante.
                            Marie est très attentive et super gentille. Recommande fortement. 
                        </p>
                    </div>
                </div>

                {/* Affiche revue 3 */}
                <div className="col-sm-12 col-md-5 card p-3 m-2 rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <Rating
                                initialValue="5"
                                disableFillHover="true"
                                readonly="true"
                                /* Available Props */
                            />
                        </div>
                    </div>
                    <hr className="ps-3 pe-3"></hr>
                    <div className="row-sm-12 row-md-6">
                        <h4>Le meilleur centre de physiothérapie sur le marché!</h4>
                        <p className="text-muted">
                            J'ai l'impression que je dois beaucoup à cet endroit pour m'avoir 
                            aidé à retrouver ma vie et mes activités sportives préférées. 
                            Je n'hésiterai certainement pas à recommander NATURA physuo à 
                            toutes les personnes que je connais.
                        </p>
                    </div>
                </div>

                {/* Affiche revue 4 */}
                <div className="col-sm-12 col-md-5 card p-3 m-2 rounded-5 shadow border-0">
                    <div className="row-sm-12 row-md-2">
                        <div className="sectionCarteAbout">
                            <Rating
                                initialValue="5"
                                disableFillHover="true"
                                readonly="true"
                                /* Available Props */
                            />
                        </div>
                    </div>
                    <hr className="ps-3 pe-3"></hr>
                    <div className="row-sm-12 row-md-6">
                        <h4>Leur équipe sont des pros</h4>
                        <p className="text-muted">
                            J'apprécie vraiment le fait que les physiothérapeutes prennent le temps
                            de travailler avec vous, malgré qu'on peut excéder le temps de la scéance,
                            contrairement à certaines cliniques de physiothérapie. 
                        </p>
                    </div>
                </div>              
            </div>
        </div>
     );
}
 
export default RevuesClient;