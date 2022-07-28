import { RuleItem } from 'async-validator';

type ValidTrigger = 'change' | 'blur';

interface SxRuleItem extends RuleItem{
    trigger?:ValidTrigger
}

interface SxFormRules{
    [key:string]:SxRuleItem |SxFormRules[];
}


const FormKey = 'formKey';
interface FormContext{
    model:Record<string,any>;
    rules: SxFormRules;
}

const FormItemKey = 'formItemKey'
interface FormItemContext {
    handleControlChange(value:string):void,
    handleControlBlur(value:string):void,
}

export{
    FormKey,
    type FormContext,

    FormItemKey,
    type FormItemContext,

    type ValidTrigger,
    type SxRuleItem,
    type SxFormRules,
}