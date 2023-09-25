import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {FormGroup} from "../../utils/FormGroup";
import {PasswordElementInterface} from "../../interfaces/PasswordElementInterface";

export default function PasswordFormField(props:PasswordElementInterface){
    const {type,disable, values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <Form.Control isInvalid={nestedTouched && nestedError!==undefined} disabled={disable} type="password" name={accessor} placeholder={Header} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(e.target.value)} />
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
