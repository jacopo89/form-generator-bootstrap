import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {TextElementInterface} from "../../interfaces/TextElementInterface";
import {TextareaElementInterface} from "../../interfaces/TextareaElementInterface";

export default function TextareaFormField(props:TextareaElementInterface){
    const {disable, values, errors, touched,setFieldValue,accessor,Header,placeholder, label} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <Form.Group as={"div"} style={{position:"relative"}}>
        {label !== false && <Form.Label>{label ?? Header}</Form.Label>}
        <Form.Control as="textarea" isInvalid={nestedTouched && nestedError!==undefined} disabled={disable} name={accessor} placeholder={placeholder} value={getNestedValue(accessor,values)} onChange={(e)=>{
            setFieldValue(e.target.value)
        }} />
        <Form.Control.Feedback
            className="font-weight-bold"
            type="invalid"
            role="alert"
            aria-label="from feedback"
            tooltip
        >
            {nestedError}
        </Form.Control.Feedback>
    </Form.Group>
}
