import { FormikErrors, FormikTouched, FormikValues } from "formik";
import { GenericFilterInterface } from "../filter-elements/FilterElementInterface";
declare type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>;
} | {
    accessorRoot?: never;
    onSubmit?: (values: any) => void | Promise<any>;
    onChange?: never;
};
declare type CommonProps = {
    elements: GenericFilterInterface[];
    validationSchema?: any;
    initialValues: FormikValues;
    children?: any;
    existingValue?: FormikValues;
    existingErrors?: FormikErrors<FormikValues> | undefined;
    existingTouched?: FormikTouched<FormikValues> | undefined;
    formValue?: FormikValues | undefined;
};
declare type Props = CommonProps & ConditionalProps;
export default function FilterGeneratorContextProvider({ formValue, elements, validationSchema, initialValues, onSubmit, children, existingValue, existingErrors, accessorRoot, onChange }: Props): JSX.Element;
export {};
