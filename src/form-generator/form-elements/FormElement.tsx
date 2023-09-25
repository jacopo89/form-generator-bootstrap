import React, {useContext} from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import {GenericElementInterface} from "../ElementInterface";
import {getAccessorElementsNoIndex, getNestedValue} from "./utils/form-generator-utils";
import {SelectOption} from "./interfaces/SelectElementInterface";
import {RadioOption} from "./interfaces/RadioElementInterface";
import FormElementGenerator from "./FormElementGenerator";


interface FormElementInterface {
    accessor:string,
    nestedForm?:(index:number)=>JSX.Element,
    placeholder?:string,
    label?: string | false,
    options?:SelectOption[] | RadioOption[],
    addButton?:any,
    removeButton?:any,
}

function getElement(elements: GenericElementInterface[], accessorParsed: string[]) {
    let element = null;
    let haystack = elements;
    accessorParsed.forEach((accessor) => {
        if(haystack === undefined) return
        if(Array.isArray(haystack)){
            const piece = haystack.find(formElement => formElement.accessor === accessor);
            // @ts-ignore
            haystack = piece?.formElements;
            element = piece;
        }
    })

    return element;
}

export default function FormElement({accessor,nestedForm, options,...others}:FormElementInterface){
    const {values,errors,touched,setFieldValue,elements,accessorRoot,disable} = useContext(FormGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);

    // @ts-ignore
    const finalOptions = options || element?.options
    const finalAccessor = accessor
    if(element){
        // @ts-ignore
        return <FormElementGenerator nestedForm={nestedForm} {...element} {...others} disable={disable} accessorRoot={accessorRoot} type={element.type} values={values} errors={errors} touched={touched} setFieldValue={(value) => setFieldValue(finalAccessor, value)} Header={element.Header} accessor={finalAccessor} options={finalOptions} />
    }
    return <div>{accessor}</div>

}

export function useFormElementValue(accessor:string){
    const {values,errors,touched,setFieldValue,elements,accessorRoot,disable} = useContext(FormGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);

    return getNestedValue(accessor,values)
}
