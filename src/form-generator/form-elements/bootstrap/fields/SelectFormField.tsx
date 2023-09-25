import React, {useCallback, useEffect, useState} from "react";
// @ts-ignore
import Select from "react-select";
import {Form} from "react-bootstrap";
import {getNestedValue} from "../../utils/form-generator-utils";
import SelectElementInterface, {SelectOption} from "../../interfaces/SelectElementInterface";

export default function SelectFormField(element:SelectElementInterface){
    const {type,values,disable, errors,options=[], touched,setFieldValue,accessor,Header, label, placeholder} = element
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const [value, setValue] = useState<SelectOption|undefined>(options.find(option => option.value === getNestedValue(accessor,values) ));

    const updateSelectValue =  useCallback(()=>{
        if(options.find(option => option.value === getNestedValue(accessor,values) )!== value){
            setValue(options.find(option => option.value === getNestedValue(accessor,values) ))
        }
    },[accessor, values, value])

    useEffect(()=>{
        updateSelectValue()
    },[values])

    const hasError = nestedTouched && nestedError !== undefined

    return <>
        {label !== false && <Form.Label>{label ?? Header}</Form.Label>}
        <Select styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: hasError  ? "red" : baseStyles.borderColor,
            })}} isDisabled={disable} classNamePrefix="react-select" options={options} value={value} onChange={(value) =>setFieldValue(value?.value)} placeholder={placeholder ?? ""} />
        <span style={{visibility: hasError ? "visible": "hidden"}} className={"small text-danger"}>{nestedError?? "Error"}</span>
    </>
}
