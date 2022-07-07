<template>
  <div>Tabs</div>
  <h2>示例1</h2>
  <Tabs v-model:selectedTitle="tabSelected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航22">内容22</Tab>
    <Tab title="导航333">内容333</Tab>
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
    const tabSelected = ref("导航1");
    return {
      tabSelected,
    };
  },
};
</script>

<style lang="scss" scoped></style>
