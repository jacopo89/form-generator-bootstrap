import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../../form-elements/utils/form-generator-utils";
export default function TextFilterField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const errorMessage = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    return _jsxs("div", Object.assign({ className: "filled form-group tooltip-end-top" }, { children: [_jsx(Form.Label, { children: Header }, void 0), _jsx(Form.Control, { type: "text", name: accessor, placeholder: Header, value: getNestedValue(accessor, values), onChange: (e) => setFieldValue(e.target.value) }, void 0), nestedTouched && _jsx("div", Object.assign({ className: "d-block" }, { children: errorMessage }), void 0)] }), void 0);
}
