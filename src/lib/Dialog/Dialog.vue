<template>
  <template v-if="visible">
    <div class="sx-dialog-overlay" @click="onClickOverlay"></div>
    <div class="sx-dialog-wrapper">
      <div class="sx-dialog">
        <header>
          <span class="sx-dialog-title">
            <slot name="title" />
          </span>
          <span class="sx-dialog-close" @click="close"></span>
        </header>
        <main>
          <slot name="content" />
        </main>
        <footer>
          <Button @click="ok" type="success">OK</Button>
          <Button @click="cancel">Cancel</Button>
        </footer>
      </div>
    </div>
  </template>
</template>

<script lang="ts">
import "./index.scss";
import Button from "../Button/Button.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Dialog",
  components: { Button },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true,
    },
    ok: {
      type: Function,
    },
    cancel: {
      type: Function,
    },
  },
  setup(props, context) {
    const close = () => {
      context.emit("update:visible", false);
    };
    const onClickOverlay = () => {
      if (props.closeOnClickOverlay) {
        close();
      }
    };
    const ok = () => {
      if (props.ok?.()) {
        close();
      }
    };
    const cancel = () => {
      if (props.cancel?.()) {
        context.emit("cancel");
        close();
      }
    };
    return { close, onClickOverlay, ok, cancel };
  },
});
</script>
