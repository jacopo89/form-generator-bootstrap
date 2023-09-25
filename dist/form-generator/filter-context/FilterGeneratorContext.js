import React from "react";
const filterContextDefaultValue = {
    values: {},
    formValue: {},
    errors: {},
    touched: {},
    setFieldValue: (name, value) => new Promise(() => { }),
    unsetFieldValue: (name) => { },
    elements: [],
    submitForm: (e) => new Promise(() => { })
};
const FilterGeneratorContext = React.createContext(filterContextDefaultValue);
export default FilterGeneratorContext;
