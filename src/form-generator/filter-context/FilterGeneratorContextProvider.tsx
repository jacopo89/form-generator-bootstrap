import {FormikErrors, FormikTouched, FormikValues, useFormik} from "formik";
import {useCallback, useEffect} from "react";
import {isArrayElementAccessor} from "../form-elements/utils/form-generator-utils";
import FilterGeneratorContext from "./FilterGeneratorContext";
import {GenericFilterInterface} from "../filter-elements/FilterElementInterface";

type ConditionalProps = {
    accessorRoot?: string;
    onSubmit?: never;
    onChange: (value: any) => Promise<void> | Promise<FormikErrors<FormikValues>>
} | {
    accessorRoot?: never;
    onSubmit?: (values:any) => void | Promise<any>;
    onChange?: never;
};

type CommonProps = {
    elements: GenericFilterInterface[]
    validationSchema?:any,
    initialValues:FormikValues
    children?:any,
    existingValue?:FormikValues,
    existingErrors?: FormikErrors<FormikValues>|undefined
    existingTouched?: FormikTouched<FormikValues>|undefined,
    formValue?: FormikValues|undefined
}

type Props = CommonProps & ConditionalProps

export default function FilterGeneratorContextProvider({formValue, elements, validationSchema, initialValues,onSubmit, children, existingValue,existingErrors, accessorRoot, onChange}:Props){
    const onSubmitHandler = (values:FormikValues) => {
        if(onSubmit){
            const onSubmitResponse = onSubmit(values)
            if(onSubmitResponse instanceof Promise){
                return onSubmitResponse.catch((error)=>{
                    if (error.response.status===400) {
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
    const { handleSubmit, setValues, values, touched, errors, setFieldValue,setErrors, setTouched,submitForm } = formik;

    const updateValues = useCallback(()=>{
        if(existingValue && existingValue !== values) {
            setValues(existingValue)
        }
    },[existingValue,values])

    const updateWhenValuesChange = useCallback(()=>{

        if(accessorRoot && values!==initialValues){
            if(values && values!==existingValue){
                //@ts-ignore
                onChange(values)
            }
        }
    },[values, existingValue,accessorRoot,initialValues])

    useEffect(()=>{
        updateWhenValuesChange()
    },[values])

    useEffect(()=>{
        updateValues()
    },[existingValue])

    useEffect(()=>{console.log("formvalue",values)},[values])


    const formContent = (onSubmit) ? <form onSubmit={handleSubmit}>{children}</form> : children

    const unsetFieldValue = (accessor:string) => {
        if(isArrayElementAccessor(accessor)){
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if(arrayAccessorStartingPosition !==-1){
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1,-1));
                const collectionAccessor = accessor.slice(0,arrayAccessorStartingPosition);
                const array:any[] = values[collectionAccessor];
                const newArray = array.filter((item,index) => index !== indexToRemove )
                const newValues = values;
                newValues[collectionAccessor] = newArray;
                setValues(newValues)
            }
        }else{
            const newValues = values;
            delete newValues[accessor]
            setValues(newValues)
        }

    }

    return <FilterGeneratorContext.Provider value={{formValue:values, values,errors, touched, setFieldValue, unsetFieldValue, elements, submitForm,accessorRoot}}>
        {formContent}
    </FilterGeneratorContext.Provider>
}
