import React from "react";
import FormDescriptor from "../../form-descriptor/FormDescriptor";
interface useDictionaryInterface {
    accessor: string;
    initialValues: any;
}
export default function useDictionary({ accessor, initialValues }: useDictionaryInterface): {
    nestedElements: any;
    remover: (index: number) => void;
    adder: () => Promise<void> | Promise<import("formik").FormikErrors<import("formik").FormikValues>>;
    getFormGeneratorProvider: (index: number, children: any) => React.FunctionComponentElement<{
        accessorRoot?: string | undefined;
        onSubmit?: ((values: any) => void | Promise<any>) | undefined;
        onChange: (value: any) => void | Promise<void> | Promise<import("formik").FormikErrors<import("formik").FormikValues>>;
        children?: any;
        formDescriptor: FormDescriptor;
        existingValue?: import("formik").FormikValues | undefined;
        existingErrors?: import("formik").FormikErrors<import("formik").FormikValues> | undefined;
        existingTouched?: import("formik").FormikTouched<import("formik").FormikValues> | undefined;
        formValue?: import("formik").FormikValues | undefined;
        disable?: boolean | undefined;
    }>;
    collectionElement: import("../../ElementInterface").GenericElementInterface | undefined;
};
export {};
