import type { ChatMessage } from "@/interfaces/chat_message.interface";
import { ref } from "vue";


// Creación de un composable

export const useChat = () => {
    
  const messages = ref<ChatMessage[]>([
   
  ]);

  //3. Disparar método que será emitido
  const onMessage = (texto: string) => {
    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: texto,
    });
  };

  return {
    // Properties
    messages,

    // Metodos
    onMessage,
  };
};
