<template>
    <Switch  :value="y" @input="y = $event"/>
    {{y}}

</template>

<script lang="ts">
import { ref } from 'vue';
import Switch from '../../lib/Switch.vue'
export default {
    name: "SwitchDemo",
    components: { Switch },
    setup(){
        const y = ref(false);
        return {y};
    }
}
</script>

<style lang="scss" scoped>
</style>