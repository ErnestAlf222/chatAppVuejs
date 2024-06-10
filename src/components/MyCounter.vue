<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3 data-testid="square-label">Square {{ squareCounter }}</h3>
        <div>
            <button class="p-5 btn" @click="changeValue">+1</button>
            <button class="p-5 btn" @click="minusValue">-1</button>
        </div>
    </section>
</template>



<script lang="ts" setup>
import { useCounter } from '@/composables/useCounter';

interface Props {
    value: number
}

const props = defineProps<Props>();

const { counter, squareCounter } = useCounter(props.value);





const changeValue = () => counter.value++;

const minusValue = () => counter.value--;






</script>

<style scoped>
.btn {
    @apply bg-blue-500 rounded hover:bg-amber-400 mr-2;
}
</style>
