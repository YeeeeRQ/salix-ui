<template>
    <div >
        <button >
            <slot />
        </button>
    </div>
</template>

<script lang="ts">
export default {
    name: "Button",
    inheritAttrs: false,
    setup(props, context) {
        const { size, ...rest } = context.attrs;
        return { size, rest }
    }
}
</script>

<style lang="scss" scoped>
div {
    border: 1px solid red;
}
</style>