<template>
  <h1>Form 示例</h1>

  <h2>基本</h2>
  <sx-form-item label="账号：">
    <sx-input v-model="msg" placeholder="用户名"></sx-input>
  </sx-form-item>

  <h2>通过Prop属性指定label</h2>
  <sx-form-item label="UserName : ">
    <sx-input v-model="msg" ></sx-input>
  </sx-form-item>

  <h2>使用自定义label</h2>
  <sx-form-item >
    <template #label>
        <b>UserName: </b>
    </template>
    <sx-input v-model="msg" ></sx-input>
  </sx-form-item>

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
