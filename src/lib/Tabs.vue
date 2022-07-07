<template>
  <div class="sx-tabs">
    <div class="sx-tabs-nav" ref="container">
      <div
        v-for="(t, index) in titles"
        class="sx-tabs-nav-item"
        :class="{
          selected: t.title === selectedTitle,
          'sx-tabs-nav-disabled': t.disabled,
        }"
        :key="index"
        :ref="
          (el) => {
            if (t.title === selectedTitle) selectedItem = el;
          }
        "
        @click="select(t)"
      >
        {{ t.title }}
      </div>
      <div class="sx-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sx-tabs-content">
      <component
        class="sx-tabs-content-item"
        :is="current"
        :key="current.props.title"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, onMounted, watchEffect } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selectedTitle: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    onMounted(() => {
      watchEffect(
        () => {
          const { width, left: resultLeft } =
            selectedItem.value.getBoundingClientRect();
          const { left: containerLeft } =
            container.value.getBoundingClientRect();

          indicator.value.style.width = width + "px";
          indicator.value.style.left = resultLeft - containerLeft + "px";
        },
        {
          flush: "post",
        }
      );
    });

    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs 子标签必须为 Tab");
      }
    });
    const titles = defaults.map((tab) => {
      if (tab.props.disabled || tab.props.disabled === "") {
        return {
          title: tab.props.title,
          disabled: true,
        };
      } else {
        return {
          title: tab.props.title,
          disabled: false,
        };
      }
    });
    const select = (t: { title: string; disabled: boolean }) => {
      if (!t.disabled) {
        context.emit("update:selectedTitle", t.title);
      }
    };
    const current = computed(() => {
      return defaults.find((tab) => tab.props.title === props.selectedTitle);
    });

    return {
      defaults,
      titles,
      current,
      select,
      selectedItem,
      indicator,
      container,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.sx-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }

      &.sx-tabs-nav-disabled {
        color: #ccc;
        cursor: not-allowed;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: left 250ms, width 250ms;
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>
