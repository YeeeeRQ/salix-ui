<template>
  <h1>Form 示例</h1>

  <h2>基本</h2>
  <sx-form-item>
    <sx-input v-model="msg"></sx-input>
  </sx-form-item>
  {{msg}}

</template>

<script lang="ts">
import { ref } from "vue";

export default {
  name: "FormDemo",
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
