import { RuleItem } from "async-validator";
import { ValidateError } from "async-validator";

type ValidTrigger = "change" | "blur";

interface SxRuleItem extends RuleItem {
  trigger?: ValidTrigger;
}

interface SxFormRules {
  [key: string]: SxRuleItem | SxRuleItem[];
}

type validateFunc = (
  callback: (valid: boolean) => void
) => Promise<boolean | ValidateError[]>;

const FormKey = "formKey";
interface FormContext {
  model: Record<string, any>;
  rules: SxFormRules;
  validate: validateFunc;
  addItem(item: Partial<FormItemContext>): void;
  removeItem(id: string): void;
}

const FormItemKey = "formItemKey";
interface FormItemContext {
  id: string;
  prop: string;
  validate: (value: string) => Promise<boolean | Error>;

  handleControlChange(value: string): void;
  handleControlBlur(value: string): void;
}

export {
  FormKey,
  type validateFunc,
  type FormContext,
  FormItemKey,
  type FormItemContext,
  type ValidTrigger,
  type SxRuleItem,
  type SxFormRules,
};
