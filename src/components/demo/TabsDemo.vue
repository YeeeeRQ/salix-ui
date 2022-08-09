<template>
  <div>Tabs</div>
  <h2>示例1</h2>
  <Tabs v-model:selectedTitle="tabSelected">
    <Tab title="导航1" id="000">内容1</Tab>
    <Tab title="导航22" id="001">内容22</Tab>
    <Tab title="导航333" id="002">内容333</Tab>
    <Tab title="导航4" id="003">内容444</Tab>
  </Tabs>
</template>

<script lang="ts">
import Tabs from "../../lib/Tabs/Tabs.vue";
import Tab from "../../lib/Tabs/Tab.vue";
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

<style lang="scss" scoped>
</style>
