<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square {{ squareCounter }}</h3>
        <div>
            <button class="p-5 btn" @click="changeValue">+1</button>
            <button class="p-5 btn" @click="minusValue">-1</button>
        </div>
    </section>
</template>



<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

const { counter, squareCounter } = useCounter(10);





const changeValue = () => counter.value++;

const minusValue = () => counter.value--;






</script>

<style scoped>
.btn {
    @apply bg-blue-500 rounded hover:bg-amber-400 mr-2;
}
</style>
