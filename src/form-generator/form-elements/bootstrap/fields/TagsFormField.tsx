import React, {useEffect, useState} from "react";
// @ts-ignore
import ReactTags from "react-tag-autocomplete";
import {Tag, TagsElementInterface} from "../../interfaces/TagElementInterface";
import {getNestedValue} from "../../utils/form-generator-utils";
import {Form} from "react-bootstrap";
//import "../tagsStyle.css"

export default function TagsFormField(props:TagsElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props

    const [tags, setTags] = useState<Tag[]>([])
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)
    const hasError = nestedTouched && nestedError !== undefined

    const onTagDelete = (i:any) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
        setFieldValue(newTags.map(newKeyword => newKeyword.name))
    };

    useEffect(()=>{
        const formTags = values[accessor].map((element:string) => {return {name:element}})
        if(values && formTags!==tags){
            setTags(formTags);
        }
    },[values])

    const onTagAddition = (tag:any) => {
        const newTags = [...tags, tag]
        setTags(() => {
            return newTags
        });
        setFieldValue(newTags.map(newKeyword => newKeyword.name) )
    };


    return <div>
        <Form.Label>{Header}</Form.Label>
        <ReactTags minQueryLength={0} tags={tags} allowNew onDelete={onTagDelete} onAddition={onTagAddition} placeholderText={Header} />
        <span style={{visibility: hasError ? "visible": "hidden"}} className={"small text-danger"}>{nestedError ?? "error"}</span>
    </div>
}
