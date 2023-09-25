import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";
import {dictionaryFormElements, dictionaryInitialElements} from "./DictionaryFieldTest";
import useSimulateQuery from "./useSimulateQuery";
import {useEffect} from "react";


const companyFormElements:FormElements = [
    {
        accessor:"companyName",
        type:"embedded",
        Header:"Company name",
        formElements: dictionaryFormElements,
        initialValues:dictionaryInitialElements
    }
]
const initialValues = {
}
const validationSchema = Yup.object().shape({
    companyName: Yup.string().required('Company name is required'),
})

const formDescriptor = new FormDescriptor({elements:companyFormElements,initialValues, validationSchema})

export default function EmbeddedFieldTest(){

    const values = useSimulateQuery(
        {companyName:{credentials:[]}},
        {companyName:{credentials: [    {key:"name", type:"text", value:"TESTO"}, {key:"numero", type:"number", value:1}]}}
    )

    return <>
        <FormGeneratorContextProvider existingValue={values} formDescriptor={formDescriptor}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <TextElement/>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}

const TextElement= () => {
    return <>
        <FormElement accessor="companyName"/>
    </>
}
