<template>
  <div>
    <input :value="displayValue" @input="debounceListener" placeholder="search here" />
    <p>deb : {{ debouncedValue }}</p>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  setup() {
    let timeoutRef = null;
    const displayValue = ref("");
    const debouncedValue = ref("");

    const debounceListener = e => {
      if (timeoutRef !== null) {
        clearTimeout(timeoutRef);
      }

      displayValue.value = e.target.value;
      timeoutRef = setTimeout(() => {
        debouncedValue.value = e.target.value;
      }, 800);
    };

    return { debouncedValue, displayValue, debounceListener };
  }
};
</script>