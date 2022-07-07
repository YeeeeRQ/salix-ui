<template>
  <div>Tabs</div>
  <h2>示例1</h2>
  <Tabs v-model:selected="tabsSelected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs.vue";
import Tab from "../../lib/Tab.vue";
import { ref } from "vue";

export default {
  name: "TabsDemo",
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const tabsSelected = ref("导航1");
    return {
      tabsSelected,
    };
  },
};
</script>

<style lang="scss" scoped></style>
