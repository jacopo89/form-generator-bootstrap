import React from "react";
// @ts-ignore
import DatePicker from "react-datepicker";
import {normalizeDate, serializeDate} from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import {getNestedValue} from "../../utils/form-generator-utils";
import {Form} from "react-bootstrap";
import {DateElementInterface} from "../../interfaces/DateElementInterface";

export default function DateFormField(props:DateElementInterface){
    const {values,disable, errors, touched,setFieldValue,accessor,Header, label, placeholder} = props
    const handleData = (value:any) => {
        setFieldValue( serializeDate(value))
    }
    const value = getNestedValue(accessor,values);
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const hasError = nestedTouched && nestedError !== undefined

    return <div>
        {label !== false && <Form.Label>{label ?? Header}</Form.Label>}
        <DatePicker disabled={disable} placeholderText={placeholder} className="form-control" selected={value ? normalizeDate(value): null} onChange={handleData} dateFormat={"dd/MM/yyyy"}/>
        <span style={{visibility: hasError ? "visible": "hidden"}} className={"small text-danger"}>{nestedError ?? "error"}</span>
    </div>
}
