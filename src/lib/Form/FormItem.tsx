import { defineComponent, PropType, provide, ref } from "vue";
import './index.scss';
import { FormItemKey } from "./types";
import Schema,{RuleItem,ValidateError} from 'async-validator';

export default defineComponent({
  name: "SxFormItem",
  props:{
    label:{
      type: String,
      default:"",
    },
    prop:{
      type:String,
      default:'',
    },
    rules:{
      type:[Object, Array] as PropType<RuleItem | RuleItem[]>
    }
  },
  setup(props, { attrs, slots, emit }) {
    const errMsg = ref('');
    const getRules = () => {
      return props.rules;
    }
    const validate = (value: string):Promise<any>=>{
      const rules = getRules();
      if(rules && props.prop){
        // const value = value
        const schema = new Schema({[props.prop]: rules})
        return schema.validate({[props.prop]:value})
        .then(
          ()=>{
            errMsg.value = "";
            return true;
          }
        ).catch(
          ({errors})=>{
            errMsg.value = errors[0].message;
            return errors;
          }
        )
      }
      return Promise.resolve(true);
    }

    // label可通过props属性传入或使用自定义的标签传入
    const renderLabel = ()=>{
      return slots.label ? slots.label() : <label class="item-label">{props.label}</label>
    }


    // const validator = (value: string)=>{
    //   console.log('validator: ', value);
    // }
    // FormItem 提供给子组件的函数
    const handleControlChange = (value: string)=>{
      console.log('handleControlChange: ',value);
      validate(value);

    }
    const handleControlBlur= (value: string)=>{
      console.log('handleControlBlur: ',value);
      validate(value);
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
