import { jsx as _jsx } from "react/jsx-runtime";
import { useFormik } from "formik";
import { useCallback, useEffect } from "react";
import { isArrayElementAccessor } from "../form-elements/utils/form-generator-utils";
import FilterGeneratorContext from "./FilterGeneratorContext";
export default function FilterGeneratorContextProvider({ formValue, elements, validationSchema, initialValues, onSubmit, children, existingValue, existingErrors, accessorRoot, onChange }) {
    const onSubmitHandler = (values) => {
        if (onSubmit) {
            const onSubmitResponse = onSubmit(values);
            if (onSubmitResponse instanceof Promise) {
                return onSubmitResponse.catch((error) => {
                    if (error.response.status === 400) {
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
    const { handleSubmit, setValues, values, touched, errors, setFieldValue, setErrors, setTouched, submitForm } = formik;
    const updateValues = useCallback(() => {
        if (existingValue && existingValue !== values) {
            setValues(existingValue);
        }
    }, [existingValue, values]);
    const updateWhenValuesChange = useCallback(() => {
        if (accessorRoot && values !== initialValues) {
            if (values && values !== existingValue) {
                //@ts-ignore
                onChange(values);
            }
        }
    }, [values, existingValue, accessorRoot, initialValues]);
    useEffect(() => {
        updateWhenValuesChange();
    }, [values]);
    useEffect(() => {
        updateValues();
    }, [existingValue]);
    useEffect(() => { console.log("formvalue", values); }, [values]);
    const formContent = (onSubmit) ? _jsx("form", Object.assign({ onSubmit: handleSubmit }, { children: children }), void 0) : children;
    const unsetFieldValue = (accessor) => {
        if (isArrayElementAccessor(accessor)) {
            const arrayAccessorStartingPosition = accessor.lastIndexOf("[");
            if (arrayAccessorStartingPosition !== -1) {
                const indexToRemove = Number.parseInt(accessor.slice(arrayAccessorStartingPosition).slice(1, -1));
                const collectionAccessor = accessor.slice(0, arrayAccessorStartingPosition);
                const array = values[collectionAccessor];
                const newArray = array.filter((item, index) => index !== indexToRemove);
                const newValues = values;
                newValues[collectionAccessor] = newArray;
                setValues(newValues);
            }
        }
        else {
            const newValues = values;
            delete newValues[accessor];
            setValues(newValues);
        }
    };
    return _jsx(FilterGeneratorContext.Provider, Object.assign({ value: { formValue: values, values, errors, touched, setFieldValue, unsetFieldValue, elements, submitForm, accessorRoot } }, { children: formContent }), void 0);
}
