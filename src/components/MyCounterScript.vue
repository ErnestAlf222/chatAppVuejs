<template>
    <section>
        <h3>Counter: {{ counter }}</h3>
        <h3>Square {{ squaredCounter }}</h3>

    </section>
</template>



<script lang="ts">
import { defineComponent, computed, ref } from "vue";

export default defineComponent({

    props: {
        value: {
            type: Number,
            required: true,
        }
    },

    setup(props) {
        const counter = ref(props.value);
        const squaredCounter = computed(() => counter.value * counter.value);

        return {
            counter,
            squaredCounter
        }
    }
})




</script>
