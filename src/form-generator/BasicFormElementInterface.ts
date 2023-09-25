import ElementInterface from "./ElementInterface";
import {FormikErrors, FormikTouched, FormikValues} from "formik";
import React from 'react'

export default interface BasicFormElementInterface extends ElementInterface{
    values:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>
    accessorRoot?:string,
    disable?:boolean,
    placeholder?:string,
    label?: string | false
}

export interface WithButtonElementInterface extends BasicFormElementInterface{
    addButton?:React.ReactHTMLElement<any>,
    removeButton?:React.ReactHTMLElement<any>,
}
