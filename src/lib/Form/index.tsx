import "./index.scss";
import { defineComponent, getCurrentInstance, PropType, provide } from "vue";
import { FormContext, FormKey, SxFormRules, validateFunc } from "./types";
import { useExpose } from "../../uses";

export default defineComponent({
  name: "SxForm",
  props: {
    model: Object,
    rules: Object as PropType<SxFormRules>,
  },
  setup(props, { attrs, slots, emit }) {
    const items = slots.default!() as any[];
    setTimeout(() => {
      items.forEach((item) => {
        console.log("item", item);
      });
    }, 1000);
    provide<Partial<FormContext>>(FormKey, {
      model: props.model,
      rules: props.rules,
    });

    const validate: validateFunc = (callback) => {
      console.log("form validate");
      if (callback) {
        callback(true);
      }
      return Promise.resolve(true);
    };

    useExpose<{ validate: validateFunc }>({ validate });

    return () => {
      return <div className="sx-form">{slots.default!()}</div>;
    };
  },
  // methods:{
  //   validate(){
  //     console.log('validate');
  //   }
  // }
});
