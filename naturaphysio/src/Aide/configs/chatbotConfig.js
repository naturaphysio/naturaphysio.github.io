  // Config starter code
  import { createChatBotMessage } from "react-chatbot-kit";
  
    
    const config = {

    

      initialMessages: [
        createChatBotMessage(`Bonjour, mon nom est Bot.`),
        createChatBotMessage("Entrer le mots 'aide' pour que je puisse vous aider.")],
        customStyles: {
          botMessageBox: {
            backgroundColor: '#20596B',
          },
          chatButton: {
            backgroundColor: '#20596B',
          }
          
        },
        customComponents: {
           // Replaces the default header
          header: () => <div style={{ backgroundColor: '#12718F', padding: "20px", color: "white", borderRadius: "3px" }}>Assistance</div>
        },
    }
  
  
  export default config