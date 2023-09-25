import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-ignore
import DatePicker from "react-datepicker";
import { normalizeDate, serializeDate } from "../../utils/TimeManager";
import 'react-datepicker/dist/react-datepicker.css';
import { getNestedValue } from "../../utils/form-generator-utils";
import { Form } from "react-bootstrap";
export default function DateFormField(props) {
    const { values, disable, errors, touched, setFieldValue, accessor, Header, label, placeholder } = props;
    const handleData = (value) => {
        setFieldValue(serializeDate(value));
    };
    const value = getNestedValue(accessor, values);
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const hasError = nestedTouched && nestedError !== undefined;
    return _jsxs("div", { children: [label !== false && _jsx(Form.Label, { children: label !== null && label !== void 0 ? label : Header }, void 0), _jsx(DatePicker, { disabled: disable, placeholderText: placeholder, className: "form-control", selected: value ? normalizeDate(value) : null, onChange: handleData, dateFormat: "dd/MM/yyyy" }, void 0), _jsx("span", Object.assign({ style: { visibility: hasError ? "visible" : "hidden" }, className: "small text-danger" }, { children: nestedError !== null && nestedError !== void 0 ? nestedError : "error" }), void 0)] }, void 0);
}
