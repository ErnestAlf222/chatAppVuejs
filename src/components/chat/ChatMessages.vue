<template>

    <div class="flex-1 overflow-y-auto p-4">
        <div class="flex flex-col space-y-2">
            <!-- Messages go here -->
            <ChatBubble
                v-for="messages in mensajes"
                :key="messages.id"
                v-bind="messages" 
                />
                <!-- :its-mine="messages.itsMine"  
                :message= "messages.message"
                :image="messages.image" -->
            
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ChatMessage } from '@/interfaces/chat_message.interface';
import ChatBubble from './ChatBubble.vue';

interface Props {
    mensajes: ChatMessage[];
}
defineProps<Props>();

</script>