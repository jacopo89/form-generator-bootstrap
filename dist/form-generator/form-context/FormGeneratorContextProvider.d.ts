import { FormikErrors, FormikTouched, FormikValues } from "formik";
import FormDescriptor from "../form-descriptor/FormDescriptor";
declare type CommonProps = {
    accessorRoot?: string;
    onSubmit?: (values: any) => void | Promise<any>;
    onChange?: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>> | void;
    children?: any;
    formDescriptor: FormDescriptor;
    existingValue?: FormikValues;
    existingErrors?: FormikErrors<FormikValues> | undefined;
    existingTouched?: FormikTouched<FormikValues> | undefined;
    formValue?: FormikValues | undefined;
    disable?: boolean;
};
declare type Props = CommonProps;
export default function FormGeneratorContextProvider(props: Props): JSX.Element;
export {};
