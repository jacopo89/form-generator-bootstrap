import {FormikErrors, FormikTouched, FormikValues, useFormik} from "formik";
import {useCallback, useEffect} from "react";

import {FormElements} from "../ElementInterface";
import {isArrayElementAccessor} from "../form-elements/utils/form-generator-utils";
import FormElement from "../form-elements/FormElement";
import FormGeneratorContext from "./FormGeneratorContext";
import FormButtonGenerator from "../form-button/FormButtonGenerator";
import FormDescriptor from "../form-descriptor/FormDescriptor";

type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>> | void
} | {
    accessorRoot?: never;
    onSubmit?: (values:any) => void | Promise<any>;
    onChange?: never;
};

type CommonProps = {
    accessorRoot?:string,
    onSubmit?: (values:any) => void | Promise<any>;
    onChange?: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>> | void
    children?:any,
    formDescriptor:FormDescriptor
    existingValue?:FormikValues,
    existingErrors?: FormikErrors<FormikValues>|undefined
    existingTouched?: FormikTouched<FormikValues>|undefined,
    formValue?: FormikValues|undefined,
    disable?: boolean
}

type Props = CommonProps

export default function FormGeneratorContextProvider(props:Props){
    const {formValue, formDescriptor, disable=false ,onSubmit, children, existingValue,existingErrors, accessorRoot, onChange} = props
    const {elements,validationSchema,initialValues} = formDescriptor
    const onSubmitHandler = (values:FormikValues) => {
        if(onSubmit){
            const onSubmitResponse = onSubmit(values)
            if(onSubmitResponse instanceof Promise){
                return onSubmitResponse.catch((error)=>{
                    if (error.response.status===400) {
                        //const response = GenericResponse.fromResponse(error.response)
                        setErrors(error.response);
                    }
                    throw error
                })
            }
            return onSubmitResponse;
        }

        return new Promise<any>(()=>{});
    }

    const formik = useFormik({ initialValues, validationSchema, onSubmit:onSubmitHandler });
    const { handleSubmit, setValues, values, touched, errors, setFieldValue,setErrors, setTouched,submitForm, isValid,isValidating,isSubmitting } = formik;

    const updateValues = useCallback(()=>{
        if(existingValue && existingValue !== values) {
            setValues(existingValue)
        }
    },[existingValue,values])

    const updateWhenValuesChange = useCallback(()=>{
        if(values!==initialValues){
            if(onChange && values && values!==existingValue){
                onChange(values)
            }
        }
    },[onChange ,values, existingValue,initialValues])

    useEffect(()=>{
        updateWhenValuesChange()
    },[values])

    useEffect(()=>{
        updateValues()
    },[existingValue])
    /*const updateErrors = useCallback(()=>{
        if(existingErrors && existingErrors !== errors) {
            setErrors(existingErrors)
        }
    },[existingErrors,errors])

    const updateTouched = useCallback(()=>{
        if(existingErrors && existingErrors !== errors){
            const keys = Object.keys(existingErrors);
            let touched = {}
            keys.forEach(key => {// @ts-ignore
                touched[key] = true})
            setTouched(touched)
        }
    },[existingErrors,errors])*/


    /*useEffect(()=>{
        updateErrors()
        updateTouched()
    },[existingErrors])*/


    /*useEffect(()=>{console.log("values",values)},[values])
    useEffect(()=>{console.log("values",errors)},[errors])
*/


    const unsetFieldValue = (accessor:string) => {
        if(isArrayElementAccessor(accessor)){
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if(arrayAccessorStartingPosition !==-1){
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1,-1));
                const collectionAccessor = accessor.slice(0,arrayAccessorStartingPosition);
                // @ts-ignore
                const array:any[] = values[collectionAccessor];
                const newArray = array.filter((item,index) => index !== indexToRemove )
                const newValues = {...values}
                // @ts-ignore
                newValues[collectionAccessor] = newArray;
                setValues(newValues)
            }
        }else{
            const newValues = {...values}
            // @ts-ignore
            delete newValues[accessor]
            setValues(newValues)
        }

    }

    return <FormGeneratorContext.Provider value={{formValue:values, disable, values,errors, touched, setFieldValue, unsetFieldValue, elements, submitForm,accessorRoot, isValid,isValidating,isSubmitting,setErrors}}>
        <FormContent onSubmit={onSubmit} formElements={elements} handleSubmit={handleSubmit} children={children} />
    </FormGeneratorContext.Provider>
}

interface FormContentInterface{
    children?:any,
    onSubmit?:(values:any) => void | Promise<any>,
    formElements:FormElements,
    handleSubmit:any
}

// @ts-ignore
const FormContent = ({children,onSubmit,formElements,handleSubmit}:FormContentInterface) => {
    const button = onSubmit && <FormButtonGenerator/>
    const content = (children) ?? <FormGeneratorContext.Consumer>
        {()=>{
            return <>
                {formElements.map(formElement => <div>
                    <div>
                        <FormElement accessor={formElement.accessor}/>
                    </div>
                </div>)
                }
                {button}
            </>
        }}
    </FormGeneratorContext.Consumer>

    return (onSubmit) ? <form noValidate onSubmit={handleSubmit}>{content}</form> : <>{content}</>
}
