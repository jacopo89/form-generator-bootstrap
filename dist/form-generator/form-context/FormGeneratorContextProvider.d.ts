import { FormikErrors, FormikTouched, FormikValues } from "formik";
import FormDescriptor from "../form-descriptor/FormDescriptor";
declare type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>> | void;
} | {
    accessorRoot?: never;
    onSubmit?: (values: any) => void | Promise<any>;
    onChange?: never;
};
declare type CommonProps = {
    children?: any;
    formDescriptor: FormDescriptor;
    existingValue?: FormikValues;
    existingErrors?: FormikErrors<FormikValues> | undefined;
    existingTouched?: FormikTouched<FormikValues> | undefined;
    formValue?: FormikValues | undefined;
    disable?: boolean;
};
declare type Props = CommonProps & ConditionalProps;
export default function FormGeneratorContextProvider(props: Props): JSX.Element;
export {};
