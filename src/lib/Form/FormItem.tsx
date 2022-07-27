import { defineComponent, provide, ref } from "vue";
import './index.scss';
import { FormItemKey } from "./types";

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

    // FormItem 提供给子组件的函数
    const handleControlChange = (value: string)=>{
      console.log('handleControlChange: ',value);

    }
    const handleControlBlur= (value: string)=>{
      console.log('handleControlBlur: ',value);
    }

    const FormItemContext = {
      handleControlChange,
      handleControlBlur,
    }
    provide(FormItemKey, FormItemContext)

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
