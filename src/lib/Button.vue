<template>
    <button class="sx-button" :class="classes"
    :disabled="disabled">
        <slot />
    </button>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity"


export default {
    name: "Button",
    props: {
        theme: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'normal'
        },
        level: {
            type: String,
            default: 'normal'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { theme, size, level } = props;
        const classes = computed(() => {
            return {
                [`sx-theme-${theme}`]: theme,
                [`sx-size-${size}`]: size,
                [`sx-level-${level}`]: level,
            }
        });
        return {classes};
    }
}
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: #e33838;
$grey: #a3a3a3;
$radius: 4px;

.sx-button {
    box-sizing: border-box;
    height: $h;
    padding: 0 12px;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    background: white;
    color: $color;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-shadow: 0 1px 0 fade-out (black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:hover,
    &:focus {
        color: $blue;
        border-color: $blue;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

    &.sx-theme-link {
        border-color: transparent;
        box-shadow: none;
        color: $blue;
        background-color: inherit;

        &:hover,
        &:focus {
            color: lighten($blue, 10%);
        }
    }

    &.sx-theme-text {
        border-color: transparent;
        box-shadow: none;
        color: inherit;
        background-color: inherit;

        &:hover,
        &:focus {
            background: darken(white, 5%);
        }
    }

    &.sx-size-small {
        font-size: 12px;
        height: 20px;
        padding: 0 4px;
    }
    &.sx-size-big{
        font-size: 24px;
        height: 48px;
        padding: 0 16px;
    }

    &.sx-theme-default.sx-level-main{
        background-color: $blue;
        color: white;
    }
    &.sx-theme-default.sx-level-danger{
        background-color: $red;
        color: white;
    }
    &.sx-theme-link.sx-level-danger{
        color:$red;
    }
    &.sx-theme-text.sx-level-danger{
        color:$red;
    }

    &.sx-theme-default{
        &[disabled]{
            cursor: not-allowed;
            color: $grey;
            background-color: #dbdbdb;

            &:hover{
                border-color: $grey;
            }
        }
    }
    &.sx-theme-link,
    &.sx-theme-text{
        &[disabled]{
            background: inherit;
            cursor: not-allowed;
            color: $grey;
        }
    }
}
</style>