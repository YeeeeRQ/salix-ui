<template>
    <button :class="{ checked }" @click="toggle">
        <span></span>
    </button>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
    name: "Switch",
    setup() {
        let checked = ref(true);
        const toggle = () => {
            checked.value = !checked.value;
        }
        return { checked, toggle }
    }
}
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;

button {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h2;
    position: relative;
    background-color: rgb(167, 183, 192);
}

span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background-color: white;
    border-radius: $h2/2;
}

button.checked>span {
    left: calc(100% - #{$h2} - 2px);
}

button.checked {
    background-color: rgb(20, 156, 241);
}
</style>