import { computed, ref } from 'vue';

//? useCounter lógica
export const useCounter = (initialValue: number = 22) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value + counter.value);

  return { counter, squareCounter };
};
