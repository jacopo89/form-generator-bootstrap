import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Row } from "react-bootstrap";
import React, { useContext } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";
export default function CollectionFormField({ accessor, nestedForm, addButton: addButtonProps, removeButton: removeButtonProps, initialValues, lockList = false }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
    const addButton = (!disable && !lockList) && ((addButtonProps) ? React.cloneElement(addButtonProps, { onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }) : _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }, { children: "+" }), void 0));
    const removeButton = (indexAccessor) => {
        return (!disable && !lockList) && ((removeButtonProps) ? React.cloneElement(removeButtonProps, { onClick: () => unsetFieldValue(indexAccessor) }) : _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: "-" }), void 0));
    };
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    // @ts-ignore
    const nestedElements = collectionElement.formElements;
    const formDescriptor = new FormDescriptor({ elements: nestedElements, initialValues });
    const nestedForms = existingElements.map((element, index) => {
        const indexAccessor = `${accessor}[${index}]`;
        return (_jsxs(Row, Object.assign({ className: "mb-3" }, { children: [_jsx(Col, Object.assign({ xs: 1, className: "d-flex justify-content-center align-items-center" }, { children: removeButton(indexAccessor) }), void 0), _jsxs(Col, Object.assign({ xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, { disable: disable, formValue: formValue, formDescriptor: formDescriptor, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => { setFieldValue(indexAccessor, value); }, children: nestedForm ? nestedForm(index) : undefined }, index), _jsx("hr", {}, void 0)] }), void 0)] }), index));
    });
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsxs("div", { children: [nestedForms, addButton] }, void 0);
}
