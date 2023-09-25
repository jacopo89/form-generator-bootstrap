import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Col, Row } from "react-bootstrap";
import { useContext, useMemo } from "react";
import FormGeneratorContext from "../../../form-context/FormGeneratorContext";
import { getNestedValue } from "../../utils/form-generator-utils";
import FormGeneratorContextProvider from "../../../form-context/FormGeneratorContextProvider";
import FormElement from "../../FormElement";
import FormDescriptor from "../../../form-descriptor/FormDescriptor";
const nestedBasicElements = [
    {
        Header: "Key",
        type: "text",
        accessor: "key"
    },
    {
        Header: "Type",
        type: "select",
        accessor: "type",
        options: [
            { label: "Text", value: "text" },
            { label: "Number", value: "number" },
        ],
    },
    {
        Header: "Value",
        type: "text",
        accessor: "value",
    }
];
export default function DictionaryFormField({ accessor, initialValues }) {
    const { setFieldValue, disable, values, elements, accessorRoot, formValue, unsetFieldValue } = useContext(FormGeneratorContext);
    const existingElements = getNestedValue(accessor, values);
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
        return (_jsxs(Row, Object.assign({ className: "mb-3" }, { children: [_jsx(Col, Object.assign({ xs: 1 }, { children: _jsx(Button, Object.assign({ className: "btn-sm", onClick: () => unsetFieldValue(indexAccessor) }, { children: "-" }), void 0) }), void 0), _jsxs(Col, Object.assign({ xs: 11 }, { children: [_jsx(FormGeneratorContextProvider, Object.assign({ disable: disable, formValue: formValue, formDescriptor: formDescriptor, existingValue: getNestedValue(indexAccessor, values), accessorRoot: indexAccessor, onChange: (value) => setFieldValue(indexAccessor, value) }, { children: _jsx(FormGeneratorContext.Consumer, { children: () => {
                                    return _jsxs(Row, { children: [_jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "key" }, void 0) }), void 0), _jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "type" }, void 0) }), void 0), _jsx(Col, Object.assign({ xs: 4 }, { children: _jsx(FormElement, { accessor: "value" }, void 0) }), void 0)] }, void 0);
                                } }, void 0) }), void 0), _jsx("hr", {}, void 0)] }), void 0)] }), index));
    });
    if (collectionElement === undefined)
        return _jsx("div", { children: accessor }, void 0);
    return _jsxs("div", { children: [nestedForms, _jsx(Button, Object.assign({ type: "button", onClick: (e) => { e.preventDefault(); setFieldValue(`${accessor}[${existing}]`, {}); } }, { children: "Add" }), void 0)] }, void 0);
}
