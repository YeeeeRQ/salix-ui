const FormItemKey = 'formItemKey'
import { RuleItem } from 'async-validator';

interface FormItemContext {
    handleControlChange(value:string):void,
    handleControlBlur(value:string):void,
}

type ValidTrigger = 'change' | 'blur';

interface SxRuleItem extends RuleItem{
    trigger?:ValidTrigger
}

export{
    FormItemKey,
    type FormItemContext,
    type SxRuleItem,
    type ValidTrigger,
}