<template>
  <div class="sx-tabs">
    <div class="sx-tabs-nav" ref="container">

      <div v-for="(t, index) in titles" :key="index" @click="select(t)" class="sx-tabs-nav-item"
        :ref="(el) => { if (t.title === selectedTitle) selectedItem = (el as any); }"
        :class="{ selected: t.title === selectedTitle, 'sx-tabs-nav-disabled': t.disabled, }">
        {{ t.title }}
      </div>

      <div class="sx-tabs-nav-indicator" ref="indicator"></div>

    </div>

    <div class="sx-tabs-content">
      <component class="sx-tabs-content-item" :is="currentContent" :key="currentContent.props.id" />
    </div>

  </div>
</template>

<script lang="ts" setup>
import './index.scss';
import { computed, ref, onMounted, watchEffect, defineComponent, useSlots } from "vue";
import Tab from "./Tab.vue";

const props = defineProps<{
  selectedTitle: string,
}>();

const emit = defineEmits<{
  (e: 'update:selectedTitle', title: string): void;
}>()

const slots = useSlots()

// 主要内容展示
const contextRelativeEffect = () => {

  // 子组件类型校验
  if (!slots.default) {
    throw new Error("Tabs 子标签必须包含Tab");
  }

  const defaultSlots = slots.default!();
  defaultSlots.forEach((tab) => {
    if (tab.type !== Tab) {
      throw new Error("Tabs 子标签必须为 Tab");
    }
  });

  // Tabs titles 
  const titles = defaultSlots.map((tab) => {
    const disabled: boolean = tab.props!.disabled || tab.props!.disabled === "";
    const title = tab.props!.title;
    return {
      title,
      disabled,
    }
  });

  const select = (t: { title: string; disabled: boolean }) => {
    if (!t.disabled) {
      emit("update:selectedTitle", t.title);
    }
  };

  // Tabs content
  const currentContent = computed(() => {
    return defaultSlots.find((tab) => tab.props!.title === props.selectedTitle);
  });

  return { titles, select, currentContent, }
}
// 动态计算indicator宽度
const indicatorAdjust = () => {
  const selectedItem = ref<HTMLDivElement | null>(null);
  const indicator = ref<HTMLDivElement | null>(null);
  const container = ref<HTMLDivElement | null>(null);
  onMounted(() => {
    watchEffect(
      () => {
        if (selectedItem.value && container.value && indicator.value) {
          const { width, left: resultLeft } =
            selectedItem.value.getBoundingClientRect();
          const { left: containerLeft } =
            container.value.getBoundingClientRect();

          indicator.value.style.width = width + "px";
          indicator.value.style.left = resultLeft - containerLeft + "px";
        }
      },
      {
        flush: "post",
      }
    );
  });
  return { container, indicator, selectedItem }
}

const { titles, select, currentContent } = contextRelativeEffect()
const { container, indicator, selectedItem } = indicatorAdjust()

</script>

<script lang="ts">
export default defineComponent({
  name: 'Tabs',
  // inheritAttrs: false,
})
</script>