import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FormElements} from "../../ElementInterface";

export interface EmbeddedElementInterface extends BasicFormElementInterface{
    type:"embedded",
    formElements: FormElements,
    nestedForm:(index:number)=> JSX.Element,
    initialValues: any,
    validationSchema:any,
}
