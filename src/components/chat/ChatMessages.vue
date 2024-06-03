<template>

    <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <ChatBubble v-for="messages in mensajes" :key="messages.id" v-bind="messages" />
            <!-- :its-mine="messages.itsMine"  
                :message= "messages.message"
                :image="messages.image" -->

        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interfaces/chat_message.interface';
import ChatBubble from './ChatBubble.vue';
import { ref, watch } from 'vue';

interface Props {
    mensajes: ChatMessage[];
}
const { mensajes } = defineProps<Props>();

// Mantener referencia al elemento HTML para hacer scroll
const chatRef = ref<HTMLDivElement | null>(null);

watch(mensajes, () => {
    setTimeout(() => {
        chatRef.value?.scrollTo({
            top: chatRef.value.scrollHeight,
            behavior: 'smooth'
        })

    }, 100);
})

</script>