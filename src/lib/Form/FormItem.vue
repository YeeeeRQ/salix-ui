<template>
  <div class="sx-form-item">
    <slot name="label">
      <label class="item-label">{{ props.label }}</label>
    </slot>

    <div class="item-content">
      <div class="item-control-wrap">
        <slot></slot>
      </div>
      <p class="item-error" v-show="errMsg">{{ errMsg }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, provide, ref } from "vue";
import {
  FormKey,
  FormContext,
  FormItemKey,
  FormItemContext,
  SxRuleItem,
  ValidTrigger,
} from "./types";
import Schema, { ValidateError } from "async-validator";

interface Props {
  label?: string;
  prop?: string;
  rules?: SxRuleItem | SxRuleItem[];
}
const props = withDefaults(defineProps<Props>(), {
  label: "",
  prop: "",
});

const parent = inject<FormContext>(FormKey);
const getRules = (trigger: ValidTrigger): SxRuleItem[] => {
  const rules = props.rules || parent?.rules[props.prop];
  if (rules) {
    const ruleArr = Array.isArray(rules) ? rules : [rules];
    const trueRules = ruleArr.filter((item) => {
      const itemTrigger = item?.trigger || "change";
      return trigger === itemTrigger;
    });
    return trueRules;
  }
  return [];
};

const errMsg = ref("");
const validate = (
  value: string,
  rules: SxRuleItem[]
): Promise<boolean | ValidateError[]> => {
  if (rules && props.prop) {
    // const value = value
    const schema = new Schema({ [props.prop]: rules });
    return schema
      .validate({ [props.prop]: value })
      .then(() => {
        errMsg.value = "";
        return true;
      })
      .catch(({ errors }) => {
        errMsg.value = errors[0].message;
        return Promise.reject(errors);
      });
  }
  return Promise.resolve(true);
};

// FormItem 提供给子组件的函数
const handleControlChange = (value: string) => {
  console.log("handleControlChange: ", value);
  const trueRules = getRules("change");
  if (trueRules.length) {
    validate(value, trueRules).catch((errors) => {
      console.error("errors >>> ", errors);
    });
  }
};
const handleControlBlur = (value: string) => {
  console.log("handleControlBlur: ", value);
  // validate(value);
  const trueRules = getRules("blur");
  if (trueRules.length) {
    validate(value, trueRules).catch((errors) => {
      console.error("errors >>> ", errors);
    });
  }
};
provide<Partial<FormItemContext>>(FormItemKey, {
  handleControlChange,
  handleControlBlur,
});
</script>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SxFormItem",
});
</script>
