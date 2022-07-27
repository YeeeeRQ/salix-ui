import './index.scss';
import { defineComponent } from "vue";

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
    return () => {
      const onInput = (event: Event) => {
        console.log('onInput');
        const value = (event.target as HTMLInputElement).value;
        if (value !== props.modelValue) {
          emit("update:modelValue", value);
        }
      };
      const onBlur = (event:Event)=>{
        console.log('onBlur');
      }
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
