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
        type:"dictionary",
        Header:"Credentials",
    },

]

export const dictionaryInitialElements = {credentials:[]}

const validationSchema = Yup.object().shape({})

const formDescriptor = new FormDescriptor({elements:dictionaryFormElements,initialValues: dictionaryInitialElements, validationSchema})

export default function DictionaryFieldTest(){
    const values = useSimulateQuery(
        {credentials:[]},
        {credentials: [    {key:"name", type:"text", value:"TESTO"}, {key:"numero", type:"number", value:1}]}
    )

    return <div className={"mx-5 px-5"}>
        <FormGeneratorContextProvider existingValue={values} formDescriptor={formDescriptor} onSubmit={(values)=>{console.log("values",values)}}>
            <FormGeneratorContext.Consumer>
                {({values})=>{
                    return <Dictionary/>
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
