import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { isArrayElementAccessor } from "../form-elements/utils/form-generator-utils";
import FormElement from "../form-elements/FormElement";
import FormGeneratorContext from "./FormGeneratorContext";
import FormButtonGenerator from "../form-button/FormButtonGenerator";
export default function FormGeneratorContextProvider(props) {
    const { formValue, formDescriptor, disable = false, onSubmit, children, existingValue, existingErrors, accessorRoot, onChange } = props;
    const { elements, validationSchema, initialValues } = formDescriptor;
    const onSubmitHandler = (values) => {
        if (onSubmit) {
            const onSubmitResponse = onSubmit(values);
            if (onSubmitResponse instanceof Promise) {
                return onSubmitResponse.catch((error) => {
                    if (error.response.status === 400) {
                        //const response = GenericResponse.fromResponse(error.response)
                        setErrors(error.response);
                    }
                    throw error;
                });
            }
            return onSubmitResponse;
        }
        return new Promise(() => { });
    };
    const formik = useFormik({ initialValues, validationSchema, onSubmit: onSubmitHandler });
    const { handleSubmit, setValues, values, touched, errors, setFieldValue, setErrors, setTouched, submitForm, isValid, isValidating, isSubmitting } = formik;
    const updateValues = useCallback(() => {
        if (existingValue && existingValue !== values) {
            setValues(existingValue);
        }
    }, [existingValue, values]);
    const updateWhenValuesChange = useCallback(() => {
        if (values !== initialValues) {
            if (values && values !== existingValue) {
                //@ts-ignore
                onChange(values);
            }
        }
    }, [values, existingValue, initialValues]);
    useEffect(() => {
        updateWhenValuesChange();
    }, [values]);
    useEffect(() => {
        updateValues();
    }, [existingValue]);
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
    const unsetFieldValue = (accessor) => {
        if (isArrayElementAccessor(accessor)) {
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if (arrayAccessorStartingPosition !== -1) {
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1, -1));
                const collectionAccessor = accessor.slice(0, arrayAccessorStartingPosition);
                // @ts-ignore
                const array = values[collectionAccessor];
                const newArray = array.filter((item, index) => index !== indexToRemove);
                const newValues = Object.assign({}, values);
                // @ts-ignore
                newValues[collectionAccessor] = newArray;
                setValues(newValues);
            }
        }
        else {
            const newValues = Object.assign({}, values);
            // @ts-ignore
            delete newValues[accessor];
            setValues(newValues);
        }
    };
    return _jsx(FormGeneratorContext.Provider, Object.assign({ value: { formValue: values, disable, values, errors, touched, setFieldValue, unsetFieldValue, elements, submitForm, accessorRoot, isValid, isValidating, isSubmitting, setErrors } }, { children: _jsx(FormContent, { onSubmit: onSubmit, formElements: elements, handleSubmit: handleSubmit, children: children }, void 0) }), void 0);
}
// @ts-ignore
const FormContent = ({ children, onSubmit, formElements, handleSubmit }) => {
    var _a;
    const button = onSubmit && _jsx(FormButtonGenerator, {}, void 0);
    const content = (_a = (children)) !== null && _a !== void 0 ? _a : _jsx(FormGeneratorContext.Consumer, { children: () => {
            return _jsxs(_Fragment, { children: [formElements.map(formElement => _jsx("div", { children: _jsx("div", { children: _jsx(FormElement, { accessor: formElement.accessor }, void 0) }, void 0) }, void 0)), button] }, void 0);
        } }, void 0);
    return (onSubmit) ? _jsx("form", Object.assign({ noValidate: true, onSubmit: handleSubmit }, { children: content }), void 0) : _jsx(_Fragment, { children: content }, void 0);
};
