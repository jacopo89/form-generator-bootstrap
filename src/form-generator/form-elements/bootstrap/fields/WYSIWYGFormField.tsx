import React, {useCallback, useEffect, useMemo, useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {getNestedValue} from "../../utils/form-generator-utils";
import {WYSIWYGElementInterface} from "../../interfaces/WYSIWYGElementInterface";

const modules = {
    history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true
    }
}

export default function WYSIWYGFormField(props:WYSIWYGElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const formValue =useMemo(()=>getNestedValue(accessor,values),[accessor,values])
    const [value, setValue] = useState<string|undefined>(formValue);

    const updateValueForm = useCallback(()=>{
        if(value !== formValue){
            setFieldValue(value)
        }
    },[values,value, accessor])

    const updateFromForm = useCallback(()=>{
        if(value !== formValue){
            setValue(formValue)
        }
    },[value,formValue])

    useEffect(()=>{
        updateFromForm()
    },[values])
    useEffect(()=>{updateValueForm()},[value])

    return <div className="my-3">
        <p>{Header}</p>
        <ReactQuill className="form-group" modules={modules} theme="snow" value={value} onChange={(content)=>{setValue(content)}}/>
    </div>
}
