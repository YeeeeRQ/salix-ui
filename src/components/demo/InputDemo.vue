<template>
  <h1>Input 示例</h1>

  <h2>基本</h2>
  <!-- <Input v-model="msg" /> -->
  <sx-input v-model="msg"></sx-input>
  <sx-input v-model="msg" placeholder="placeholder"></sx-input>
  <sx-input v-model="msg" placeholder="password" type="password"></sx-input>
  {{ msg }}
</template>

<script lang="ts">
// import Input from "../../lib/Input";
import { ref } from "vue";

export default {
  name: "InputDemo",
  // components: { Input },
  setup() {
    let msg = ref(null);

    return { msg };
  },
};
</script>

<style lang="scss" scoped>
h1,
h2 {
  padding-top: 16px;
  padding-bottom: 16px;
}

button.sx-button {
  margin-top: 16px;
}
</style>
