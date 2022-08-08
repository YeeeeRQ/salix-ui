<template>
<Switch v-model:value="isOpen" disabled />
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
        const isOpen= ref(false);
        return {
            isOpen
        }
    }
}
</script>