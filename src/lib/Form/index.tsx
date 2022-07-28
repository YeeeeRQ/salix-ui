import { defineComponent } from "vue";

export default defineComponent({
  name: "SxForm",
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
