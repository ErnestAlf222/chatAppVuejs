<template>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <hr>
    <MyCounter :hulk="5" text="Ernesto"/>
    <MyCounterScript :value="5" />
</template>

<script lang="ts" setup>

import MyCounter from './components/MyCounter.vue'
import MyCounterScript from './components/MyCounterScript.vue'

</script>