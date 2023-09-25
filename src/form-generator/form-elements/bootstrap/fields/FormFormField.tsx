import {Button, Col, Row} from "react-bootstrap";
import React, {useContext, useMemo} from "react";
import {FormElements} from "../../../ElementInterface";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import {getNestedValue} from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import FormElement from "../../FormElement";
import {FormElementInterface} from "../../interfaces/FormElementInterface";
import _ from 'lodash';
import FormDescriptor from "../../../form-descriptor/FormDescriptor";

const nestedBasicElements:FormElements = [
    {
        Header:"Accessor",
        type:"text",
        accessor:"accessor"
    },
    {
        Header:"Label",
        type:"text",
        accessor:"Header"
    },
    {
        Header:"Type",
        type:"select",
        accessor:"type",
        options:[
            {label:"Text", value:"text"},
            {label:"Number", value:"number"},
            {label:"Select", value:"select"},
            {label:"Date", value:"date"},
        ],
    },
    {
        Header:"Options",
        type:"collection",
        accessor:"options",
        formElements:[
            {Header:"Label", type:"text",accessor:"label"},
            {Header:"Value", type:"text",accessor:"value"}
        ],
        initialValues:{}
    }
]

const initialValues = {
    accessor:undefined,
    type:"text",
    Header:undefined,
    options:[]
}

export default function FormFormField({accessor, addButton:addButtonProps, removeButton:removeButtonProps}:FormElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)

    const addButton =  ( (addButtonProps) ?  React.cloneElement(addButtonProps,{onClick:(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}) : <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, {...initialValues,accessor:`${accessor}[${existing}]`})}}>+</Button>)
    const removeButton = (indexAccessor:string) => {
        return  ( (removeButtonProps) ?  React.cloneElement(removeButtonProps,{onClick:() => unsetFieldValue(indexAccessor)}) : <Button onClick={() => unsetFieldValue(indexAccessor)}>-</Button>)
    }

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
                    <Col xs={1} className={"d-flex justify-content-center align-items-center"}>
                        {removeButton(indexAccessor)}
                    </Col>
                    <Col xs={11}>
                        <FormGeneratorContextProvider disable={disable} formValue={formValue} formDescriptor={formDescriptor} existingValue={getNestedValue(indexAccessor,values)}  accessorRoot={indexAccessor} onChange={(value) => {
                            setFieldValue(indexAccessor, {...value,accessor:_.camelCase(value.Header)})
                        }}>
                            <FormGeneratorContext.Consumer>
                                {({values})=>{
                                    return <Row>
                                        <Col xs={6}>
                                            <FormElement accessor={"Header"}/>
                                        </Col>
                                        <Col xs={6}>
                                            <FormElement accessor={"type"}/>
                                        </Col>
                                        {values["type"] ==="select" && <Row>
                                            <Col xs={12}>
                                                <FormElement accessor={"options"} nestedForm={OptionsForm} />
                                            </Col>
                                        </Row>}
                                    </Row>
                                }}
                            </FormGeneratorContext.Consumer>
                        </FormGeneratorContextProvider>
                    </Col>

                </Row>
            )})


    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {addButton}
    </div>
}

const OptionsForm = () => {
    return <Row>
        <Col xs={6}>
            <FormElement accessor={"label"}></FormElement>
        </Col>
        <Col xs={6}>
            <FormElement accessor={"value"}></FormElement>
        </Col>
    </Row>
}
