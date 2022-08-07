<template>
  <button class="sx-btn" :class="classes" :disabled="disabled">
    <span v-show="loading" class="sx-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import './index.scss';
import { computed } from "@vue/reactivity";

const typeMap = ["default", "primary", "success", "warning", "danger"];
const sizeMap = ["medium", "small", "large"];

export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "default",
      validator(value) {
        return typeMap.includes(value);
      },
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return sizeMap.includes(value);
      },
    },
    link: {
      type: Boolean,
      default: false,
    },
    text: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { type, size, text, link } = props;
    const classes = computed(() => {
      return {
        [`sx-type-${type}`]: type,
        [`sx-size-${size}`]: size,
        [`sx-btn-text`]: text,
        [`sx-btn-link`]: link,
      };
    });
    return { classes };
  },
};
</script>
