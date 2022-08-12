<template>
  <button class="sx-btn" :class="classes" :disabled="disabled">
    <span v-show="loading" class="sx-loadingIndicator"></span>
    <slot />
  </button>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
export default defineComponent({
  name: "SxButton",
  setup() {},
});
</script>

<script lang="ts" setup>
import "./index.scss";
type buttonType = "default" | "primary" | "success" | "warning" | "danger";
type buttonSize = "medium" | "small" | "large";
interface Props {
  type?: buttonType;
  size?: buttonSize;
  link?: boolean;
  text?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  type: "default",
  size: "medium",
  link: false,
  text: false,
  disabled: false,
  loading: false,
});

const { type, size, text, link } = props;
const classes = computed(() => {
  return {
    [`sx-type-${type}`]: type,
    [`sx-size-${size}`]: size,
    [`sx-btn-text`]: text,
    [`sx-btn-link`]: link,
  };
});
</script>
