import {useContext} from "react";

import {GenericFilterInterface} from "./FilterElementInterface";
import {getAccessorElementsNoIndex} from "../form-elements/utils/form-generator-utils";
import FilterGeneratorContext from "../filter-context/FilterGeneratorContext";
import BootstrapFilterElementGenerator from "./bootstrap/BootstrapFilterElementGenerator";

interface FilterElementInterface {
    accessor:string,
    nestedForm?:(index:number)=>JSX.Element,
}

function getElement(elements: GenericFilterInterface[], accessorParsed: string[]) {
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

export default function FilterElement({accessor,nestedForm}:FilterElementInterface){
    const {values,errors,touched,setFieldValue,elements,accessorRoot} = useContext(FilterGeneratorContext)
    const accessorParsed = getAccessorElementsNoIndex(accessor)
    const element = getElement(elements,accessorParsed);
    const finalAccessor = accessor
    if(element){
        // @ts-ignore
        return <BootstrapFilterElementGenerator nestedForm={nestedForm} {...element} accessorRoot={accessorRoot} type={element.type} values={values} errors={errors} touched={touched} setFieldValue={(value) => setFieldValue(finalAccessor, value)} Header={element.Header} accessor={finalAccessor}/>
    }
    return <div>{accessor}</div>

}
