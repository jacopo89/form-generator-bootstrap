import { FormikErrors, FormikTouched, FormikValues } from "formik";
import FilterInterface from "./FilterElementInterface";
export default interface BasicFilterElementInterface extends FilterInterface {
    values: FormikValues;
    errors: FormikErrors<FormikValues>;
    touched: FormikTouched<FormikValues>;
    setFieldValue: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>;
    accessorRoot?: string;
}
