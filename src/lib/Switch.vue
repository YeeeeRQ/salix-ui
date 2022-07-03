<template>
    <button class="sx-switch" :class="{ 'sx-checked': value }" @click="toggle">
        <span class="sx-circle"></span>
    </button>
</template>

<script lang="ts">

export default {
    name: "Switch",
    props: {
        value: Boolean
    },
    setup(props, context) {
        const toggle = () => {
            context.emit('update:value', !props.value)
        }
        return { toggle }
    }
}
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$t: 0.4s;

.sx-switch {
    height: $h;
    width: $h*2;
    border: none;
    border-radius: $h2;
    position: relative;
    background-color: rgb(167, 183, 192);
    transition: background-color $t;

    >span.sx-circle {
        position: absolute;
        top: 2px;
        left: 2px;
        height: $h2;
        width: $h2;
        background-color: white;
        border-radius: $h2;
        transition: left $t;
    }

    &.sx-checked>span {
        left: calc(100% - #{$h2} - 2px);
    }

    &.sx-checked {
        background-color: rgb(20, 156, 241);
    }

    &::focus {
        outline: none;
    }
}
</style>