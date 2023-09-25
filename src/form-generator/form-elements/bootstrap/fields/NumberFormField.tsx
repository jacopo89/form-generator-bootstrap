import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {FormGroup} from "../../utils/FormGroup";
import {NumberElementInterface} from "../../interfaces/NumberElementInterface";


export default function NumberFormField(props:NumberElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header, placeholder, label} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <FormGroup>
        {label !== false && <Form.Label>{label ?? Header}</Form.Label>}
        <Form.Control isInvalid={nestedTouched && nestedError!==undefined} type="number" name={accessor} placeholder={placeholder} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(parseInt(e.target.value))} />
        <Form.Control.Feedback
            className="font-weight-bold"
            type="invalid"
            role="alert"
            aria-label="from feedback"
            tooltip
        >
            {nestedError}
        </Form.Control.Feedback>
    </FormGroup>
}
