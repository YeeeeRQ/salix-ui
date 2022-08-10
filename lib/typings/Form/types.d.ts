import { RuleItem } from "async-validator";
import { ValidateError } from "async-validator";
declare type ValidTrigger = "change" | "blur";
interface SxRuleItem extends RuleItem {
    trigger?: ValidTrigger;
}
interface SxFormRules {
    [key: string]: SxRuleItem | SxRuleItem[];
}
declare type validateFunc = (callback: (valid: boolean) => void) => Promise<boolean | ValidateError[]>;
declare const FormKey = "formKey";
interface FormContext {
    model: Record<string, any>;
    rules: SxFormRules;
    validate: validateFunc;
    addItem(item: Partial<FormItemContext>): void;
    removeItem(id: string): void;
}
declare const FormItemKey = "formItemKey";
interface FormItemContext {
    id: string;
    prop: string;
    validate: (value: string) => Promise<boolean | Error>;
    handleControlChange(value: string): void;
    handleControlBlur(value: string): void;
}
export { FormKey, type validateFunc, type FormContext, FormItemKey, type FormItemContext, type ValidTrigger, type SxRuleItem, type SxFormRules, };
