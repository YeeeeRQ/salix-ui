import "./index.scss";
import { defineComponent, inject } from "vue";
import { FormItemContext, FormItemKey } from "../Form/types";

export default defineComponent({
  name: "SxInput",
  props: {
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      default: "text",
      validator: (value: string) => {
        return [
          "text",
          "password",
          "number",
          "tel",
          "textarea",
          "time",
        ].includes(value);
      },
    },
  },
  inheritAttrs: false,
  setup(props, { attrs, slots, emit }) {
    const formItemCtx = inject<FormItemContext>(FormItemKey);

    return () => {
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
      return (
        <div class="sx-field-wrap">
          <input
            class="sx-field"
            type={props.type}
            value={props.modelValue}
            placeholder={attrs.placeholder as string}
            onInput={onInput}
            onBlur={onBlur}
          />
        </div>
      );
    };
  },
});
