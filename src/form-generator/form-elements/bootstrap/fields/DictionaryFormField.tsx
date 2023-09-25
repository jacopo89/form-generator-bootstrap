import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import {FormElements} from "../../../ElementInterface";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import FormElement from "../../FormElement";
import { DictionaryElementInterface } from "../../interfaces/DictionaryElementInterface";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";

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

export default function DictionaryFormField({accessor,initialValues}:DictionaryElementInterface){
    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)
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


    const nestedForms = existingElements.map((element:any,index:number)=>{
            const indexAccessor = `${accessor}[${index}]`
        const formDescriptor = new FormDescriptor({elements:nestedElements[index],initialValues})
            return (<Row key={index} className={"mb-3"}>
                    <Col xs={1}>
                        <Button className={"btn-sm"} onClick={() => unsetFieldValue(indexAccessor)}>
                            -
                        </Button>
                    </Col>
                    <Col xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} formDescriptor={formDescriptor} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => setFieldValue(indexAccessor, value)}>
                            <FormGeneratorContext.Consumer>
                                {()=>{
                                    return <Row>
                                        <Col xs={4}>
                                            <FormElement accessor={"key"}/>
                                        </Col>
                                        <Col xs={4}>
                                            <FormElement accessor={"type"}/>
                                        </Col>
                                        <Col xs={4}>
                                            <FormElement accessor={"value"}/>
                                        </Col>
                                    </Row>
                                }}
                            </FormGeneratorContext.Consumer>

                        </FormGeneratorContextProvider>
                        <hr/>
                    </Col>

                </Row>
            )})


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {
            <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,{})}}>
                Add
            </Button>
        }

    </div>
}
