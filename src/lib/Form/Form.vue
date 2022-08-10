<template>
  <div class="sx-form">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SxForm",
});
</script>

<script lang="ts" setup>
import "./index.scss";
import { provide } from "vue";
import { FormContext, FormItemContext, FormKey, SxFormRules } from "./types";

interface Props {
  model: object;
  rules?: SxFormRules;
}
const props = defineProps<Props>();

const formItems: FormItemContext[] = [];
const addItem = (item: FormItemContext) => {
  formItems.push(item);
};
const removeItem = (id: string) => {
  if (formItems.length) {
    const index = formItems.findIndex((item) => item.id === id);
    if (index > -1) {
      formItems.splice(index, 1);
    }
  }
};
provide<Partial<FormContext>>(FormKey, {
  model: props.model,
  rules: props.rules,
  addItem,
  removeItem,
});

// 输入校验
const validate = (
  callback?: (valid: boolean) => void
): Promise<boolean | Error> => {
  return Promise.all(
    formItems
      .filter((item) => item.prop)
      .map((item) => item.validate(props.model[item.prop]))
  )
    .then(() => {
      if (callback) {
        callback(true);
      }
      return Promise.resolve(true);
    })
    .catch((errors) => {
      if (callback) {
        callback(false);
      }
      return Promise.reject(errors);
    });
};

defineExpose({ validate });
</script>
