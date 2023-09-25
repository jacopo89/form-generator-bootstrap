import React, {useContext, useMemo} from "react";
import FormGeneratorContext from "../../form-context/FormGeneratorContext";
import {getNestedValue} from "../utils/form-generator-utils";
import {DictionaryElementInterface} from "../interfaces/DictionaryElementInterface";
import {FormElements} from "../../ElementInterface";
import FormDescriptor from "../../form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../../form-context/FormGeneratorContextProvider";

const nestedBasicElements:FormElements = [
    {
        Header:"Key",
        type:"text",
        accessor:"key"
    },
    {
        Header:"Type",
        type:"select",
        accessor:"type",
        options:[
            {label:"Text", value:"text"},
            {label:"Number", value:"number"},
        ],
    },
    {
        Header:"Value",
        type:"text",
        accessor:"value",
    }
]

interface useDictionaryInterface{
    accessor:string,
    initialValues:any
}

export default function useDictionary({accessor,initialValues}:useDictionaryInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = useMemo(()=>getNestedValue(accessor,values),[accessor,values])

    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);

    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length

    const nestedElements = useMemo(()=>{
        // @ts-ignore
        const finalElements =  existingElements.map((value,index) => {
            return nestedBasicElements.map(nested => {
                if(nested.accessor === "value"){
                    const newNested = {...nested};
                    newNested.type = value["type"] ?? "text";
                    return newNested;
                }
                return nested;
            })
        })

        return finalElements
    },[existingElements])

    const getFormDescriptor = (index:number) => new FormDescriptor({elements:nestedElements[index],initialValues})

    const getFormGeneratorProvider = (index:number, children:any) => {
        const indexAccessor = getIndexAccessor(index)
        return React.createElement(FormGeneratorContextProvider,{
            formDescriptor:getFormDescriptor(index),
            disable:disable, formValue:formValue,  existingValue:getNestedValue(indexAccessor,values),
            accessorRoot:indexAccessor,
            onChange:(value) => setFieldValue(indexAccessor, value),
            children:children
        })
    }

    const getIndexAccessor  = (index:number) => `${accessor}[${index}]`
    const remover = (index:number) => unsetFieldValue(getIndexAccessor(index))
    const adder = () => setFieldValue(`${accessor}[${existing}]`,{})

    return {nestedElements,remover, adder, getFormGeneratorProvider,collectionElement }
}
