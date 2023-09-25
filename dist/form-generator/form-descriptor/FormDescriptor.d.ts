import { FormElements } from "../ElementInterface";
import * as Yup from "yup";
import { FormDescriptorAddElementInterface } from "./FormDescriptorAddElementInterface";
interface FormDescriptorInterface {
    elements: FormElements;
    validationSchema?: Yup.ObjectSchema<any>;
    initialValues: object;
}
export default class FormDescriptor {
    elements: FormElements;
    validationSchema: Yup.ObjectSchema<any>;
    initialValues: object;
    constructor({ elements, validationSchema, initialValues }: FormDescriptorInterface);
    addElement(element: FormDescriptorAddElementInterface, initialValue: any, validationRule?: any): void;
}
export {};
