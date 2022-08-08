<template>
    <Switch v-model:value="isOpenSw1" size="big" />
    <br>
    <Switch v-model:value="isOpenSw2" />
    <br>
    <Switch v-model:value="isOpenSw3" size="small" />
</template>

<script lang="ts">
import {
    ref
} from 'vue';
import Switch from '../lib/Switch/Switch.vue';
export default {
    components: {
        Switch
    },
    setup() {
        const isOpenSw1 = ref(false);
        const isOpenSw2 = ref(false);
        const isOpenSw3 = ref(false);
        return {
            isOpenSw1,
            isOpenSw2,
            isOpenSw3,
        }
    }
}
</script>