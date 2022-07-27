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

  <h2>表单验证</h2>
  <sx-form-item label="UserName:" prop="username" :rules="nameRules">
    <sx-input v-model="username" placeholder="UserName"></sx-input>
  </sx-form-item>
  <sx-form-item label="Password:" prop="password">
    <sx-input v-model="password" placeholder="Password" type="password"></sx-input>
  </sx-form-item>

</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
import {RuleItem} from 'async-validator';

export default {
  name: "FormDemo",
  setup() {
    let msg = ref(null);
    let data4validator = reactive({
        username:'Tommy',
        password:'HelloWorld',
    })
    const nameRules = ref<RuleItem>({
        required: true,
        message: '请输入用户名'
    })

    return { msg, ...toRefs(data4validator), nameRules };
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
