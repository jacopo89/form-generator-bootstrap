import { FormikValues } from "formik";
import { RadioOption } from "./interfaces/RadioFilterElementInterface";
import { SelectFilterOption } from "./interfaces/SelectFilterElementInterface";
export declare type FilterType = "text" | "number" | "select" | "radio" | "checkbox" | "file" | "wysiwyg" | "tags" | "collection" | "embedded" | "date" | "countries";
export declare type DateType = "after" | "before" | "between";
export default interface FilterInterface {
    Header: string;
    accessor: string;
    type: FilterType;
    valueManipulator?: (formValue: FormikValues) => any;
    accessorManipulator?: (formValue: FormikValues) => string;
}
export interface TextFilterInterface extends FilterInterface {
    type: "text";
}
export interface CheckboxFilterInterface extends FilterInterface {
    type: "checkbox";
}
export interface RadioFilterInterface extends FilterInterface {
    type: "radio";
    options: RadioOption[];
}
export interface CountriesFilterInterface extends FilterInterface {
    type: "countries";
}
export interface SelectFilterInterface extends FilterInterface {
    type: "select";
    options: SelectFilterOption[];
}
export interface TagsFilterInterface extends FilterInterface {
    type: "tags";
}
export interface NumberFilterInterface extends FilterInterface {
    type: "number";
}
export interface DateFilterInterface extends FilterInterface {
    type: "date";
    dateType: DateType;
}
export declare type GenericFilterInterface = TextFilterInterface | SelectFilterInterface | CheckboxFilterInterface | RadioFilterInterface | TagsFilterInterface | NumberFilterInterface | DateFilterInterface | CountriesFilterInterface;
export declare type FilterElements = GenericFilterInterface[];
