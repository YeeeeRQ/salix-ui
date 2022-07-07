<template>
  <div class="sx-tabs">
    <div class="sx-tabs-nav">
      <div
        class="sx-tabs-nav-item"
        v-for="(t, index) in titles"
        :key="index"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
    </div>
    <div class="sx-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/reactivity";
import Tab from "./Tab.vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const defaults = context.slots.default();
    const tabs = defaults.filter((item) => item.type === Tab);
    if (defaults.length > tabs.length) {
      console.warn("Tabs tag must include Tab tag");
    }

    // const current = tabs.filter((tag) => {
    //   return tag.props.title === props.selected;
    // })[0];
    const current = computed(() => {
      return tabs.find((tag) => tag.props.title === props.selected);
    });

    const titles = tabs.map((tag) => {
      return tag.props.title;
    });

    const select = (title: string) => {
      context.emit("update:selected", title);
    };

    return {
      tabs,
      titles,
      current,
      select,
    };
  },
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.sx-tabs {
  border: 1px solid red;

  &-nav {
    border: 1px solid red;
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

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
    }
  }

  &-content {
    border: 1px solid red;
    padding: 8px 0;
  }
}
</style>
