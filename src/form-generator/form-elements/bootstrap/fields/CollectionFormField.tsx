import {Button, Col, Row} from "react-bootstrap";
import React, {useContext} from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import {getNestedValue} from "../../utils/form-generator-utils";
import {CollectionElementInterface} from "../../interfaces/CollectionElementInterface";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";

export default function CollectionFormField({accessor, nestedForm, addButton:addButtonProps, removeButton:removeButtonProps,initialValues, lockList=false}:CollectionElementInterface){

    const {setFieldValue, disable,values,elements,accessorRoot, formValue, unsetFieldValue} = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor,values)

    const addButton = (!disable && !lockList) && ( (addButtonProps) ?  React.cloneElement(addButtonProps,{onClick:(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}) : <Button type="button" onClick={(e)=>{e.preventDefault(); setFieldValue(`${accessor}[${existing}]`,initialValues)}}>+</Button>)
    const removeButton = (indexAccessor:string) => {
        return (!disable && !lockList) && ( (removeButtonProps) ?  React.cloneElement(removeButtonProps,{onClick:() => unsetFieldValue(indexAccessor)}) : <Button onClick={() => unsetFieldValue(indexAccessor)}>-</Button>)
    }
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor ===accessor);

    if(!Array.isArray(getNestedValue(accessor,values))) console.log("accessor", accessor)
    const existing = getNestedValue(accessor,values).length
    // @ts-ignore
    const nestedElements= collectionElement.formElements
    const formDescriptor = new FormDescriptor({elements:nestedElements,initialValues})

    const nestedForms =  existingElements.map((element:any,index:number)=>{
                const indexAccessor = `${accessor}[${index}]`
                return (<Row key={index} className={"mb-3"}>
                        <Col xs={1} className={"d-flex justify-content-center align-items-center"}>
                            {removeButton(indexAccessor)}
                        </Col>
                        <Col xs={11}>
                            <FormGeneratorContextProvider disable={disable} formValue={formValue} key={index} formDescriptor={formDescriptor} existingValue={getNestedValue(indexAccessor, values)}  accessorRoot={indexAccessor} onChange={(value) => {setFieldValue(indexAccessor, value)}} children={nestedForm ? nestedForm(index) : undefined}/>
                            <hr/>
                        </Col>
                    </Row>
                )})

    if(collectionElement === undefined) return <div>{accessor}</div>
    return <div>
        {nestedForms}
        {addButton}
    </div>
}
