import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Row } from "react-bootstrap";
import React, { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import FormElement from "../../FormElement";
import _ from 'lodash';
import FormDescriptor from "../../../form-descriptor/FormDescriptor";
const nestedBasicElements = [
    {
        Header: "Accessor",
        type: "text",
        accessor: "accessor"
    },
    {
        Header: "Label",
        type: "text",
        accessor: "Header"
    },
    {
        Header: "Type",
        type: "select",
        accessor: "type",
        options: [
            { label: "Text", value: "text" },
            { label: "Number", value: "number" },
            { label: "Select", value: "select" },
            { label: "Date", value: "date" },
        ],
    },
    {
        Header: "Options",
        type: "collection",
        accessor: "options",
        formElements: [
            { Header: "Label", type: "text", accessor: "label" },
            { Header: "Value", type: "text", accessor: "value" }
        ],
        initialValues: {}
    }
];
const initialValues = {
    accessor: undefined,
    type: "text",
    Header: undefined,
    options: []
};
export default function FormFormField({ accessor, addButton: addButtonProps, removeButton: removeButtonProps }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
    const addButton = ((addButtonProps) ? React.cloneElement(addButtonProps, { onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, initialValues); } }) : _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, Object.assign(Object.assign({}, initialValues), { accessor: `${accessor}[${existing}]` })); } }, { children: "+" }), void 0));
    const removeButton = (indexAccessor) => {
        return ((removeButtonProps) ? React.cloneElement(removeButtonProps, { onClick: () => unsetFieldValue(indexAccessor) }) : _jsx(Button, Object.assign({ onClick: () => unsetFieldValue(indexAccessor) }, { children: "-" }), void 0));
    };
    // @ts-ignore
    const collectionElement = elements.find(element => element.accessor === accessor);
    if (!Array.isArray(getNestedValue(accessor, values)))
        console.log("accessor", accessor);
    const existing = getNestedValue(accessor, values).length;
    const nestedElements = useMemo(() => {
        // @ts-ignore
        const finalElements = existingElements.map((value, index) => {
            return nestedBasicElements.map(nested => {
                var _a;
                if (nested.accessor === "value") {
                    const newNested = Object.assign({}, nested);
                    newNested.type = (_a = value["type"]) !== null && _a !== void 0 ? _a : "text";
                    return newNested;
                }
                return nested;
            });
        });
        return finalElements;
    }, [existingElements]);
    const nestedForms = existingElements.map((element, index) => {
        const indexAccessor = `${accessor}[${index}]`;
        const formDescriptor = new FormDescriptor({ elements: nestedElements[index], initialValues });
        return (_jsxs(Row, Object.assign({ className: "mb-3" }, { children: [_jsx(Col, Object.assign({ xs: 1, className: "d-flex justify-content-center align-items-center" }, { children: removeButton(indexAccessor) }), void 0), _jsx(Col, Object.assign({ xs: 11 }, { children: _jsx(FormGeneratorContextProvider, Object.assign({ disable: disable, formValue: formValue, formDescriptor: formDescriptor, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => {
                            setFieldValue(indexAccessor, Object.assign(Object.assign({}, value), { accessor: _.camelCase(value.Header) }));
                        } }, { children: _jsx(FormGeneratorContext.Consumer, { children: ({ values }) => {
                                return _jsxs(Row, { children: [_jsx(Col, Object.assign({ xs: 6 }, { children: _jsx(FormElement, { accessor: "Header" }, void 0) }), void 0), _jsx(Col, Object.assign({ xs: 6 }, { children: _jsx(FormElement, { accessor: "type" }, void 0) }), void 0), values["type"] === "select" && _jsx(Row, { children: _jsx(Col, Object.assign({ xs: 12 }, { children: _jsx(FormElement, { accessor: "options", nestedForm: OptionsForm }, void 0) }), void 0) }, void 0)] }, void 0);
                            } }, void 0) }), void 0) }), void 0)] }), index));
    });
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsxs("div", { children: [nestedForms, addButton] }, void 0);
}
const OptionsForm = () => {
    return _jsxs(Row, { children: [_jsx(Col, Object.assign({ xs: 6 }, { children: _jsx(FormElement, { accessor: "label" }, void 0) }), void 0), _jsx(Col, Object.assign({ xs: 6 }, { children: _jsx(FormElement, { accessor: "value" }, void 0) }), void 0)] }, void 0);
};
