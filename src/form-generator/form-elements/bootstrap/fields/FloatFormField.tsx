import {Form} from "react-bootstrap";
import React from "react";
import {FormGroup} from "../../utils/FormGroup";
import {getNestedValue} from "../../utils/form-generator-utils";
import {FloatElementInterface} from "../../interfaces/FloatElementInterface";


export default function FloatFormField(props:FloatElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <Form.Control isInvalid={nestedTouched && nestedError!==undefined} type="number" name={accessor} placeholder={Header} value={values[accessor]} onChange={(e)=>setFieldValue(parseFloat(e.target.value))} />
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
