import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../utils/form-generator-utils";
import {PatternFormat} from 'react-number-format';
import {FormGroup} from "../../utils/FormGroup";
import {TelephoneElementInterface} from "../../interfaces/TelephoneElementInterface";

export default function TelephoneFormField(props:TelephoneElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <FormGroup>
        <Form.Label>{Header}</Form.Label>
        <PatternFormat name={accessor} valueIsNumericString value={getNestedValue(accessor,values)} onValueChange={(e)=>setFieldValue(e.value)}  format="+## ##########" mask="_" className="form-control" allowEmptyFormatting />
        {nestedTouched && <div className="d-block">{errorMessage}</div>}
    </FormGroup>
}
