import React from "react";
const formContextDefaultValue = {
    values: {},
    formValue: {},
    errors: {},
    touched: {},
    setFieldValue: (name, value) => new Promise(() => { }),
    unsetFieldValue: (name) => { },
    elements: [],
    submitForm: (e) => new Promise(() => { }),
    disable: false,
    isValid: false,
    isValidating: false,
    isSubmitting: false,
    setErrors: (errors) => { }
};
const FormGeneratorContext = React.createContext(formContextDefaultValue);
export default FormGeneratorContext;
