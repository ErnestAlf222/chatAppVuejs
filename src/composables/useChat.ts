import { sleep } from '@/helpers/sleep';
import type { ChatMessage } from '@/interfaces/chat_message.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response';
import { ref } from 'vue';

// Creación de un composable

export const useChat = () => {
  const messages = ref<ChatMessage[]>([]);

  //1. Traer la apiRest
  const getHerResponses = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  //3. Disparar método que será emitido
  const onMessage = async (texto: string) => {
    if (texto.length === 0) return;

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: texto,
    });

    // Evaluar si termina con un ?
    if (!texto.endsWith('?')) return;
    await sleep(1.5);

    const { answer, image } = await getHerResponses();
    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });
  };

  return {
    // Properties
    messages,

    // Metodos
    onMessage,
  };
};
