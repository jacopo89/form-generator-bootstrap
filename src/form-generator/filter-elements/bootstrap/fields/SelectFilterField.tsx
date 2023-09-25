import React, {useCallback, useEffect, useState} from "react";
// @ts-ignore
import Select from "react-select";
import {Form} from "react-bootstrap";
import {getNestedValue} from "../../../form-elements/utils/form-generator-utils";
import SelectFilterElementInterface, {SelectFilterOption} from "../../interfaces/SelectFilterElementInterface";

export default function SelectFilterField(element:SelectFilterElementInterface){
    const {type,values, errors,options, touched,setFieldValue,accessor,Header} = element

    const [value, setValue] = useState<SelectFilterOption|undefined>(options.find(option => option.value === getNestedValue(accessor,values) ));

    const updateSelectValue =  useCallback(()=>{
        if(options.find(option => option.value === getNestedValue(accessor,values) )!== value){
            setValue(options.find(option => option.value === getNestedValue(accessor,values) ))
        }
    },[accessor, values, value])

    useEffect(()=>{
        updateSelectValue()
    },[values])

    // @ts-ignore
    const select =<Select classNamePrefix="react-select" options={options} value={value} onChange={(value) =>setFieldValue(value.value)} placeholder={Header} />


    return <>
        <Form.Label>{Header}</Form.Label>
        {select}
    </>
}
