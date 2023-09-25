import {FormikErrors, FormikTouched, FormikValues} from "formik";
import React from "react";
import {GenericFilterInterface} from "../filter-elements/FilterElementInterface";

export interface FilterContextInterface{
    values:FormikValues,
    formValue:FormikValues,
    errors:FormikErrors<FormikValues>,
    touched:FormikTouched<FormikValues>,
    setFieldValue:(name:string,value:any)=> Promise<void> | Promise<FormikErrors<FormikValues>>,
    unsetFieldValue: (accessor:string) => void
    elements:GenericFilterInterface[],
    submitForm:(e?: React.FormEvent<HTMLFormElement> | undefined) => Promise<any>
    accessorRoot?:string
}

const filterContextDefaultValue:FilterContextInterface = {
    values:{},
    formValue:{},
    errors:{},
    touched:{},
    setFieldValue:(name:string,value:any)=>new Promise<void>(()=>{}),
    unsetFieldValue:(name:string)=>{},
    elements:[],
    submitForm: (e?: React.FormEvent<HTMLFormElement> | undefined) => new Promise<void>(()=>{})
}


const FilterGeneratorContext = React.createContext(filterContextDefaultValue)

export default FilterGeneratorContext
