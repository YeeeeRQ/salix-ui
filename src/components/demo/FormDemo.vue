<template>
  <h1>Form 示例</h1>

  <h2>基本</h2>
  <sx-form-item label="账号：">
    <sx-input v-model="msg" placeholder="用户名"></sx-input>
  </sx-form-item>

  <h2>通过Prop属性指定label</h2>
  <sx-form-item label="UserName : ">
    <sx-input v-model="msg"></sx-input>
  </sx-form-item>

  <h2>使用自定义label</h2>
  <sx-form-item>
    <template #label>
      <b>UserName: </b>
    </template>
    <sx-input v-model="msg"></sx-input>
  </sx-form-item>

  <h2>FormItem验证</h2>
  <sx-form-item label="UserName:" prop="username">
    <sx-input v-model="username" placeholder="UserName"></sx-input>
  </sx-form-item>
  <sx-form-item label="Password:" prop="password">
    <sx-input
      v-model="password"
      placeholder="Password"
      type="password"
    ></sx-input>
  </sx-form-item>
  <h2>Form表单</h2>
  <sx-form :model="formValues" :rules="formRules">
    <sx-form-item label="UserName:" prop="username">
        <sx-input v-model="username" placeholder="UserName"></sx-input>
    </sx-form-item>
    <sx-form-item label="Password:" prop="password">
        <sx-input
        v-model="password"
        placeholder="Password"
        type="password"
        ></sx-input>
    </sx-form-item>
  </sx-form>

</template>

<script lang="ts">
import { reactive, ref, toRefs } from "vue";
import { SxRuleItem } from "../../lib/Form/types";

export default {
  name: "FormDemo",
  setup() {
    let msg = ref(null);
    let data4validator = reactive({
      username: "Tommy",
      password: "HelloWorld",
    });

    const formRules = reactive({
      username: [
        {
          required: true,
          message: "请输入用户名",
          trigger: "blur",
        },
        {
          max: 10,
          message: "用户名长度超过限制",
          trigger: "change",
        },
      ],
      password: [
        {
          required: true,
          message: "请输入密码",
          trigger: "blur",
        },
        {
          min: 6,
          message: "密码长度不应少于6位",
          trigger: "change",
        },
        {
          max: 18,
          message: "密码长度超过限制",
          trigger: "change",
        },
      ],
    });

    return { msg, ...toRefs(data4validator), formRules };
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
