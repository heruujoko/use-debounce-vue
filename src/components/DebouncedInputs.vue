<template>
  <div>
    <input :value="displayValue" @input="debounceListener" placeholder="search here" />
    <p>deb : {{ debouncedValue }}</p>
  </div>
</template>

<script>
import useDebounce from "../composed/useDebounce";

export default {
  setup() {
    return {
      ...useDebounce(2000)
    };
  }
};
</script>