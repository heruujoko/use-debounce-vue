import { ref } from "@vue/composition-api";

export default function (timeoutCount = 800) {
    let timeoutRef = null;
    const displayValue = ref("");
    const debouncedValue = ref("");

    const debounceListener = e => {
        // console.log(e.target.value);
        if (timeoutRef !== null) {
            clearTimeout(timeoutRef);
        }

        displayValue.value = e.target.value;
        timeoutRef = setTimeout(() => {
            debouncedValue.value = e.target.value;
        }, timeoutCount);
    };

    return { debouncedValue, displayValue, debounceListener };
}