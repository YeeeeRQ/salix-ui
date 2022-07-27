import { defineComponent } from "vue";
import './index.scss';

export default defineComponent({
  name: "SxFormItem",
  setup(props, { attrs, slots, emit }) {
    return () => {
      return (
        <div class="sx-form-item">
          <div class="item-content">
            <div class="item-control-wrap">{slots.default!()}</div>
            <p class="item-error"></p>
          </div>
        </div>
      );
    };
  },
});
