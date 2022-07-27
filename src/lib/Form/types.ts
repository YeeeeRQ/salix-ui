const FormItemKey = 'formItemKey'

interface FormItemContext {
    handleControlChange(value:string):void,
    handleControlBlur(value:string):void,
}

export{
    FormItemKey,
    type FormItemContext,
}