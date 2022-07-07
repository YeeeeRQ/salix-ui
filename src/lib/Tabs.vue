<template>
  <div class="sx-tabs">
    <div class="sx-tabs-nav">
      <div
        class="sx-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="el => {if (el)navItems[index] = el}"
        :key="index"
        :class="{ selected: t === selected }"
        @click="select(t)"
      >
        {{ t }}
      </div>
      <div class="sx-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="sx-tabs-content">
      <component :is="current" :key="current.props.title" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref} from "@vue/reactivity";
import { onMounted } from "vue";
import Tab from "./Tab.vue";

export default {
  name: "Tabs",
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([])
    const indicator = ref<HTMLDivElement>(null)
    onMounted(()=>{
      const divs = navItems.value
      const result = divs.filter(div=>div.classList.contains('selected'))[0]
      const {width} = result.getBoundingClientRect()
      indicator.value.style.width = width + 'px'
    })

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
      navItems,
      indicator

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
    }

    &-indicator{
      position: absolute;
      height: 3px;
      background-color: $blue;
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
