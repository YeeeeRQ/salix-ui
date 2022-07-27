import { defineComponent, ref } from "vue";
import './index.scss';

export default defineComponent({
  name: "SxFormItem",
  props:{
    label:{
      type: String,
      default:""
    }
  },
  setup(props, { attrs, slots, emit }) {
    const errMsg = ref('');

    // label可通过props属性传入或使用自定义的标签传入
    const renderLabel = ()=>{
      return slots.label ? slots.label() : <label class="item-label">{props.label}</label>
    }

    return () => {
      return (
        <div class="sx-form-item">
          {renderLabel()}
          <div class="item-content">
            <div class="item-control-wrap">{slots.default!()}</div>
            <p class="item-error" v-show="errMsg" >{errMsg.value}</p>
          </div>
        </div>
      );
    };
  },
});
