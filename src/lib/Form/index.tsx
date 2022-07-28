import { defineComponent, PropType } from "vue";
import { SxFormRules } from "./types";

export default defineComponent({
  name: "SxForm",
  props:{
    model: Object,
    rules: Object as PropType<SxFormRules>
  },
  setup(props, { attrs, slots, emit }) {
    return () => {
        return (
          <div className="sx-form">
            { slots.default!() }
          </div>
        )
    }
  },
});
