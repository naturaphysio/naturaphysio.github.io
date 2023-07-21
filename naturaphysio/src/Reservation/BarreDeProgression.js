// Importe de la librairie react
import { useEffect, useState } from "react";

const BarreDeProgression = ({etat}) => {

    // Variable
    const progressStep = document.querySelectorAll(".progress-step");   // Progres reservation
    let formStepsNum = 0;   // Variable qui permet de savoir a quelle etape utilisateur se trouve
    const [progress, setProgress] = useState('');

    useEffect(() => {
        formStepsNum = etat;
        updateProgressBar();
    });


    /**
     * Cette fonction est appelée afin de mettre à jour la barre de progrès, qui se trouve
     * dans le diagramme, où se trouve les différentes étapes. Lorsqu'on passe à la prochaine
     * étape, alors le progrès de celui-ci est incrémenté. Sinon, il est décrémenté.
     */
    function updateProgressBar() {
        progressStep.forEach((progressSteps, idx) => {
            if (idx < (formStepsNum + 1)) {
                progressSteps.classList.add('progress-step-active');
            } else {
                progressSteps.classList.remove('progress-step-active');
            }
        });

        const progressActive = document.querySelectorAll(".progress-step-active");
        setProgress(((progressActive.length - 1) / (progressStep.length - 1)) * 100 + "%");

    }

    return (

        // Barre de progression
        <div className="barre">
            <div className="progressbar mx-auto">
                <div className="progress" id="progress" style={{
                    width:`${progress}`
                }}></div>
                <div className="progress-step progress-step-active">1
                    <strong className="ProgressBar-stepLabel">Services</strong>
                </div>
                <div className="progress-step" data-title="Step 2: Information personnelle">2
                    <strong className="ProgressBar-stepLabel">Information personnelle</strong>
                </div>
                <div className="progress-step" data-title="Step 3: Confirmation">3
                    <strong className="ProgressBar-stepLabel">Confirmation</strong>
                </div>
            </div>
        </div>
        
    );
}

export default BarreDeProgression;