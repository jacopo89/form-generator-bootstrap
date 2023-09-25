import {WithButtonElementInterface} from "../../BasicFormElementInterface";

export interface FormElementInterface extends WithButtonElementInterface{
    type:"form",
    initialValues: any,
    validationSchema:any,
}
