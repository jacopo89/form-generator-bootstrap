import {FormElements} from "../form-generator/ElementInterface";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormGeneratorContext from "../form-generator/form-context/FormGeneratorContext";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import * as Yup from 'yup'
import FormElement from "../form-generator/form-elements/FormElement";
import {useEffect, useRef, useState} from "react";
import useSimulateQuery from "./useSimulateQuery";

export const dictionaryFormElements:FormElements = [
    {
        accessor:"credentials",
        type:"form",
        Header:"Credentials",
    },

]

export const dictionaryInitialElements = {credentials:[]}

const validationSchema = Yup.object().shape({})

const formDescriptor = new FormDescriptor({elements:dictionaryFormElements,initialValues: dictionaryInitialElements, validationSchema})

export default function FormFieldTest(){
    const values = useSimulateQuery(
        {credentials:[]},
        {credentials: []}
    )

    return <div className={"mx-5 px-5"}>
        <FormGeneratorContextProvider existingValue={values} formDescriptor={formDescriptor} onSubmit={(values)=>{console.log("values",values)}}>
            <FormGeneratorContext.Consumer>
                {({values})=>{
                    return <>
                        <Dictionary/>
                        <FormGeneratorContextProvider formDescriptor={ new FormDescriptor({elements:values.credentials, initialValues:{}})}/>
                    </>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </div>
}

const Dictionary = () => {
    return <div >
                <FormElement accessor={"credentials"}/>
        <div>
            <button type={"submit"}>Salva</button>
        </div>
    </div>
}
