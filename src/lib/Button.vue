<template>
    <button class="sx-btn" :class="classes" :disabled="disabled">
        <span v-show="loading" class="sx-loadingIndicator"></span>
        <slot />
    </button>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity"

const typeMap = [
    'default',
    'primary',
    'success',
    'warning',
    'danger',
]
const sizeMap = [
    'medium',
    'small',
    'large',
]

export default {
    name: "Button",
    props: {
        type: {
            type: String,
            default: 'default',
            validator(value) {
                return typeMap.includes(value);
            }
        },
        size: {
            type: String,
            default: 'medium',
            validator(value) {
                return sizeMap.includes(value);
            }
        },
        link: {
            type: Boolean,
            default: false
        },
        text: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        loading: {
            type: Boolean,
            default: false
        }
    },
    setup(props) {
        const { type, size, text, link } = props;
        const classes = computed(() => {
            return {
                [`sx-type-${type}`]: type,
                [`sx-size-${size}`]: size,
                [`sx-btn-text`]: text,
                [`sx-btn-link`]: link,

            }
        });
        return { classes };
    }
}
</script>

<style lang="scss">
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$red: #e33838;
$grey: #a3a3a3;
$radius: 4px;


$font-size-sm: 12px;
$font-size-md: 14px;
$font-size-lg: 16px;

$line-height-sm: 20px;
$line-height-md: 20px;
$line-height-lg: 22px;

$color-default: #fff;
$color-primary: #4088db;
$color-success: #3add99;
$color-warning: #ddc73a;
$color-danger: #dd453a;

$text-color-light: #fff;
$text-color-dark: #333;
$text-color-link: #40a9ff;

.sx-btn {
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    vertical-align: middle;
    border: 1px solid $border-color;
    border-radius: $radius;
    // box-shadow: 0 1px 0 fade-out (black, 0.95);

    &+& {
        margin-left: 8px;
    }

    &:focus {
        outline: none;
    }

    &::-moz-focus-inner {
        border: 0;
    }

}

// type
.sx-btn {
    background-color: $color-default;
    color: $text-color-dark;

    &[disabled] {
        cursor: not-allowed;
        background-color: darken($color-default, 10%);
        color: lighten($text-color-dark, 60%);
    }

    &.sx-type-primary {
        background-color: $color-primary;
        color: $text-color-light;

        &[disabled] {
            background-color: lighten($color-primary, 20%);
        }
    }

    &.sx-type-success {
        background-color: $color-success;
        color: $text-color-light;

        &[disabled] {
            background-color: lighten($color-success, 20%);
        }
    }

    &.sx-type-warning {
        background-color: $color-warning;
        color: $text-color-light;

        &[disabled] {
            background-color: lighten($color-warning, 20%);
        }
    }

    &.sx-type-danger {
        background-color: $color-danger;
        color: $text-color-light;

        &[disabled] {
            background-color: lighten($color-danger, 20%);
        }
    }
}

// size
.sx-btn {
    font-size: $font-size-md;
    line-height: $line-height-md;
    padding: 5px 12px;

    &.sx-size-small {
        font-size: $font-size-sm;
        line-height: $line-height-sm;
        padding: 2px 8px;
    }

    &.sx-size-large {
        font-size: $font-size-lg;
        line-height: $line-height-lg;
        padding: 8px 16px;
    }
}

// link button & text button
.sx-btn {

    &.sx-btn-text,
    &.sx-btn-link {

        border-color: transparent;
        box-shadow: none;
        background-color: inherit;
        color: inherit;


        &[disabled] {
            cursor: not-allowed;
            background: inherit;
            color: $grey;

            &:hover,
            &:focus {
                text-shadow: none;
            }
        }

        &.sx-type-primary {
            color: $color-primary;
        }

        &.sx-type-success {
            color: $color-success;
        }

        &.sx-type-warning {
            color: $color-warning;
        }

        &.sx-type-danger {
            color: $color-danger;
        }
    }

    &.sx-btn-text {

        &:hover,
        &:focus {
            background-color: darken(white, 10%);
        }
    }

    &.sx-btn-link {
        color: $blue;

        &:hover,
        &:focus {
            text-shadow: 1px 1px 1px #00000020;
        }
    }
}

// loading
.sx-btn {
    >.sx-loadingIndicator {
        display: flex;
        justify-content: center;
        text-align: center;
        vertical-align: middle;

        &::before {
            content: "";
            display: inline-block;
            width: $font-size-md;
            height: $font-size-md;
            line-height: $line-height-md;
            margin-right: 6px;
            border-radius: 100%;
            border-color: $blue $blue $blue transparent;
            border-style: solid;
            border-width: 2px;
            animation: sx-spin 1s infinite linear;
        }

        @keyframes sx-spin {

            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }
    }

}
</style>