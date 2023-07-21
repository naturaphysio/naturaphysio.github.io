// Importe pour le chatbot
import Chatbot from "react-chatbot-kit";
import chatbotConfig from "./configs/chatbotConfig";
import MessageParser from "./chatbot/MessageParser.js";
import ActionProvider from "./chatbot/ActionProvider.js";

// Importe css pour le chatbot
import 'react-chatbot-kit/build/main.css';

// Importe des images
import image from "../images/contact.png"

// Importe de la librairie react bootstrap
import { Row } from "react-bootstrap";


const AssistantAide = () => {

    return ( 
        <div>
        
            <div className="assistantAide ">

                <div className="col-12 col-md-6">
                    <img src={image} alt="Image principale de la page" role="img" className="w-100 h-100" />
                </div>
                
                <div className="chatbot-body col-sm-12 col-md-5">
                    <div className="chatbot-titre ps-3 pe-3">
                        <Row>
                            <h2>CHATBOT</h2>
                            <hr className="ps-3 pe-3"></hr>
                        </Row>

                    </div>
                    <div className="chatbot mt-3 ms-4 center">
                        <Chatbot messageParser={MessageParser} actionProvider={ActionProvider} config={chatbotConfig} placeholderText="Rédiger votre message..." />
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default AssistantAide;