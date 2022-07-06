<template>
    <div>Tabs</div>
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
</template>

<script lang="ts">
import { ssrContextKey } from "vue";

export default {
    name: "Tabs",
    setup(props, context){
        const defaults = context.slots.default()
        return {
            defaults
        }
    }
}
</script>

<style lang="scss">


</style>