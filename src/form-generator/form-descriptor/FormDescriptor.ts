import {FormElements} from "../ElementInterface";
import * as Yup from "yup";
import {FormDescriptorAddElementInterface} from "./FormDescriptorAddElementInterface";

interface FormDescriptorInterface{
    elements:FormElements,
    validationSchema?:Yup.ObjectSchema<any>,
    initialValues:object
}

export default class FormDescriptor{
    elements:FormElements
    validationSchema: Yup.ObjectSchema<any>
    initialValues:object

    constructor({elements,validationSchema = Yup.object().shape({}),initialValues}:FormDescriptorInterface) {
        this.initialValues = initialValues;
        this.elements = elements;
        this.validationSchema = validationSchema;
    }

    addElement(element:FormDescriptorAddElementInterface, initialValue:any, validationRule?:any){
        const existingElement = this.elements.find(existingElement => existingElement.accessor === element.accessor)
        if(existingElement===undefined){
            if(element.type==="collection" || element.type==="embedded"){
                this.elements.push({...element,initialValues:initialValue})
            }else{
                this.elements.push(element);
            }
            this.initialValues = {...this.initialValues, [element.accessor]:initialValue}
            if(validationRule) this.validationSchema.shape({[element.accessor]:validationRule})
        }
    }

}
