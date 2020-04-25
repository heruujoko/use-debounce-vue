<template>
  <div>
    <p>{{ stock }}</p>
    <button @click="addStock">add</button>
    <button @click="reduceStock">reduce</button>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
export default {
  setup() {
    const stock = ref(3);

    function addStock() {
      stock.value++;
    }

    function reduceStock() {
      stock.value--;
    }

    return { stock, addStock, reduceStock }
  }
};
</script>
