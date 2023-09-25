var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useContext } from "react";
import FormGeneratorContext from "../form-context/FormGeneratorContext";
import { getAccessorElementsNoIndex, getNestedValue } from "./utils/form-generator-utils";
import FormElementGenerator from "./FormElementGenerator";
function getElement(elements, accessorParsed) {
    let element = null;
    let haystack = elements;
    accessorParsed.forEach((accessor) => {
        if (haystack === undefined)
            return;
        if (Array.isArray(haystack)) {
            const piece = haystack.find(formElement => formElement.accessor === accessor);
            // @ts-ignore
            haystack = piece === null || piece === void 0 ? void 0 : piece.formElements;
            element = piece;
        }
    });
    return element;
}
export default function FormElement(_a) {
    var { accessor, nestedForm, options } = _a, others = __rest(_a, ["accessor", "nestedForm", "options"]);
    const { values, errors, touched, setFieldValue, elements, accessorRoot, disable } = useContext(FormGeneratorContext);
    const accessorParsed = getAccessorElementsNoIndex(accessor);
    const element = getElement(elements, accessorParsed);
    // @ts-ignore
    const finalOptions = options || (element === null || element === void 0 ? void 0 : element.options);
    const finalAccessor = accessor;
    if (element) {
        // @ts-ignore
        return _jsx(FormElementGenerator, Object.assign({ nestedForm: nestedForm }, element, others, { disable: disable, accessorRoot: accessorRoot, type: element.type, values: values, errors: errors, touched: touched, setFieldValue: (value) => setFieldValue(finalAccessor, value), Header: element.Header, accessor: finalAccessor, options: finalOptions }), void 0);
    }
    return _jsx("div", { children: accessor }, void 0);
}
export function useFormElementValue(accessor) {
    const { values, errors, touched, setFieldValue, elements, accessorRoot, disable } = useContext(FormGeneratorContext);
    const accessorParsed = getAccessorElementsNoIndex(accessor);
    const element = getElement(elements, accessorParsed);
    return getNestedValue(accessor, values);
}
