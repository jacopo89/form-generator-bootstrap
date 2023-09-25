import { SelectOption } from "./interfaces/SelectElementInterface";
import { RadioOption } from "./interfaces/RadioElementInterface";
interface FormElementInterface {
    accessor: string;
    nestedForm?: (index: number) => JSX.Element;
    placeholder?: string;
    label?: string | false;
    options?: SelectOption[] | RadioOption[];
    addButton?: any;
    removeButton?: any;
}
export default function FormElement({ accessor, nestedForm, options, ...others }: FormElementInterface): JSX.Element;
export declare function useFormElementValue(accessor: string): any;
export {};
