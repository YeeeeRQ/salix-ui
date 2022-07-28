import "./index.scss";
import { defineComponent, PropType, provide } from "vue";
import { FormContext, FormKey, SxFormRules } from "./types";

export default defineComponent({
  name: "SxForm",
  props:{
    model: Object,
    rules: Object as PropType<SxFormRules>
  },
  setup(props, { attrs, slots, emit }) {
    provide<Partial<FormContext>>(FormKey, {
      model: props.model,
      rules: props.rules,
    });
    return () => {
        return (
          <div className="sx-form">
            { slots.default!() }
          </div>
        )
    }
  },
});
