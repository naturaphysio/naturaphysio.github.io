// Importe des videos
import video_birg_dog from "./videos/exercice/bird_dog_video.mp4";
import video_cat_cow from "./videos/exercice/cat_cow_video.mp4";
import video_cobra from "./videos/exercice/cobra_video.mp4";
import video_crescent_lunges from "./videos/exercice/crescent_lunges_video.mp4";
import video_dog_to_plank from "./videos/exercice/dog_to_plank_video.mp4";
import video_squats_aquatic from "./videos/exercice/squats_in_water_video.mp4";
import video_high_knees_aquatic from "./videos/exercice/walk_with_high_knees_video.mp4";
import video_weight_transfert_aquatic from "./videos/exercice/weight_transfer_video.mp4";
import video_clamshell from "./videos/exercice/clamshell_video.mp4";
import video_cycling_aquatic from "./videos/exercice/cycling_video.mp4";
import video_glute_bridge from "./videos/exercice/glute_bridge_video.mp4";
import video_elastic from "./videos/exercice/external_rotation_elastic_video.mp4";
import video_foam_rolling from "./videos/exercice/foam_rolling_it_band_video.mp4";

const Exercice = () => {
    return ( 
        <div>
            <div className="about w-75 mx-auto pb-2 pt-3">
                
                {/* Titre de la page */}
                <div className='equipe ps-3 pe-3'>
                    <div className='row'>
                        <h2>VIDÉOS D'EXERCICES</h2>
                        <hr className='ps-3 pe-3'></hr>
                    </div>
                </div>

                {/* Section qui comporte des vidéos de yoga */}
                <h2 className="pt-4 m-2">YOGA</h2>
                <div className="video_yoga">
                    
                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>L'oiseau chien</h4>
                        <p className="text-muted fst-italic">(Bird dog)</p>
                        <video className=" w-100" controls >
                            <source src={video_birg_dog} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Le chat et la vache</h4>
                        <p className="text-muted fst-italic">(Cat and cow)</p>
                        <video className=" w-100" controls >
                            <source src={video_cat_cow} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Le cobra</h4>
                        <p className="text-muted fst-italic">(Cobra)</p>
                        <video className=" w-100" controls >
                            <source src={video_cobra} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Les fentes</h4>
                        <p className="text-muted fst-italic">(Lunges)</p>
                        <video className=" w-100" controls >
                            <source src={video_crescent_lunges} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Chien à la planche</h4>
                        <p className="text-muted fst-italic">(Dog to plank)</p>
                        <video className=" w-100" controls >
                            <source src={video_dog_to_plank} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                

                {/* Section qui comporte des vidéos d'aquathérapie */}
                <h2 className="pt-4 m-2">Aquathérapie</h2>
                <div className="video_aquatic">
                    
                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Squats</h4>
                        <p className="text-muted fst-italic">(Squats)</p>
                        <video className=" w-100" controls >
                            <source src={video_squats_aquatic} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Marcher avec les genoux hauts</h4>
                        <p className="text-muted fst-italic">(Walk with high knees)</p>
                        <video className=" w-100" controls >
                            <source src={video_high_knees_aquatic} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Transfert de poids</h4>
                        <p className="text-muted fst-italic">(Weight transfer)</p>
                        <video className=" w-100" controls >
                            <source src={video_weight_transfert_aquatic} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Vélo</h4>
                        <p className="text-muted fst-italic">(Cycling)</p>
                        <video className=" w-100" controls >
                            <source src={video_cycling_aquatic} type="video/mp4"/>
                        </video>
                    </div>
                </div>
                

                {/* Section qui comporte des vidéos d'orthopédie */}
                <h2 className="pt-4 m-2">Orthopédie</h2>
                <div className="video_orthopedie pb-4">
                    
                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Pont fessier</h4>
                        <p className="text-muted fst-italic">(Glute bridge)</p>
                        <video className=" w-100" controls >
                            <source src={video_glute_bridge} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Rotation externe avec élastique</h4>
                        <p className="text-muted fst-italic">(External rotation with elastic)</p>
                        <video className=" w-100" controls >
                            <source src={video_elastic} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Bande IT roulante en mousse</h4>
                        <p className="text-muted fst-italic">(Foam rolling IT band)</p>
                        <video className=" w-100" controls >
                            <source src={video_foam_rolling} type="video/mp4"/>
                        </video>
                    </div>

                    <div className="col-sm-12 col-md-5 m-2">
                        <h4>Coquille</h4>
                        <p className="text-muted fst-italic">(Clamshell)</p>
                        <video className=" w-100" controls >
                            <source src={video_clamshell} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Exercice;