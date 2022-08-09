<template>
  <div class="sx-field-wrap">
    <input
      class="sx-field"
      :type="type"
      :value="modelValue"
      :placeholder="(placeholder as string)"
      @input="onInput"
      @blur="onBlur"
    />
  </div>
</template>

<script lang="ts" setup>
import "./index.scss";
import { FormItemContext, FormItemKey } from "../Form/types";

interface Props {
  modelValue?: string;
  type?: string;
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
  type: "text",
});

const { placeholder } = useAttrs();

const formItemCtx = inject<FormItemContext>(FormItemKey);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const onInput = (event: Event) => {
  console.log("onInput");
  const value = (event.target as HTMLInputElement).value;
  if (value !== props.modelValue) {
    emit("update:modelValue", value);
    formItemCtx?.handleControlChange(value);
  }
};
const onBlur = (event: Event) => {
  console.log("onBlur");
  formItemCtx?.handleControlBlur(props.modelValue);
};
</script>

<script lang="ts">
import { defineComponent, inject, useAttrs } from "vue";
export default defineComponent({
  name: "SxInput",
  inheritAttrs: false,
});
</script>
