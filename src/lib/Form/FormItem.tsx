import { defineComponent, inject, PropType, provide, ref } from "vue";
import { FormContext, FormItemContext, FormItemKey, FormKey, SxRuleItem, ValidTrigger } from "./types";
import Schema, { RuleItem, ValidateError } from "async-validator";

export default defineComponent({
  name: "SxFormItem",
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
    rules: {
      type: [Object, Array] as PropType<SxRuleItem | SxRuleItem[]>,
    },
  },
  setup(props, { attrs, slots, emit }) {
    const errMsg = ref("");

    // Todo: 消除不被Form包含时的警告
    const parent = inject<FormContext>(FormKey);

    const getRules = (trigger: ValidTrigger):SxRuleItem[] => {
      const rules = props.rules || parent?.rules[props.prop];
      if(rules){
        const ruleArr = Array.isArray(rules) ? rules : [rules];
        const trueRules = ruleArr.filter((item) => {
          const itemTrigger = item?.trigger || 'change';
          return trigger === itemTrigger;
        });
        return trueRules;
      }
      return [];
    };

    const validate = (value: string, rules: SxRuleItem[]): Promise<boolean | ValidateError[]> => {
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

    // label可通过props属性传入或使用自定义的标签传入
    const renderLabel = () => {
      return slots.label ? (
        slots.label()
      ) : (
        <label class="item-label">{props.label}</label>
      );
    };

    // FormItem 提供给子组件的函数
    const handleControlChange = (value: string) => {
      console.log("handleControlChange: ", value);
      const trueRules = getRules('change');
      if(trueRules.length){
        validate(value ,trueRules).catch(errors=>{
          console.error('errors >>> ', errors);
        });
      }
    };
    const handleControlBlur = (value: string) => {
      console.log("handleControlBlur: ", value);
      // validate(value);
      const trueRules = getRules('blur');
      if(trueRules.length){
        validate(value ,trueRules).catch(errors=>{
          console.error('errors >>> ', errors);
        });

      }
    };

    provide<FormItemContext>(FormItemKey, {
      handleControlChange,
      handleControlBlur,
    });

    return () => {
      return (
        <div class="sx-form-item">
          {renderLabel()}
          <div class="item-content">
            <div class="item-control-wrap">{slots.default!()}</div>
            <p class="item-error" v-show="errMsg">
              {errMsg.value}
            </p>
          </div>
        </div>
      );
    };
  },
});
