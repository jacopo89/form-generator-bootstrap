import {Form} from "react-bootstrap";
import React from "react";
import {getNestedValue} from "../../../form-elements/utils/form-generator-utils";
import {TextFilterElementInterface} from "../../interfaces/TextFilterElementInterface";


export default function TextFilterField(props:TextFilterElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const errorMessage = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    return <div className="filled form-group tooltip-end-top">
        <Form.Label>{Header}</Form.Label>
        <Form.Control type="text" name={accessor} placeholder={Header} value={getNestedValue(accessor,values)} onChange={(e)=>setFieldValue(e.target.value)} />
        {nestedTouched && <div className="d-block">{errorMessage}</div>}
    </div>
}
