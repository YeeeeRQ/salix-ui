import { defineComponent } from "vue";

export default defineComponent({
  name: "Input",
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
    return () => {
      const onInput = (event: Event) => {
        const value = (event.target as HTMLInputElement).value;
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      return (
        <div class="sx-input">
          <input
            type={props.type}
            value={props.modelValue}
            placeholder={attrs.placeholder as string}
            onInput={onInput}
          />
        </div>
      );
    };
  },
});
