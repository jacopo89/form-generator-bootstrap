import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormGroup } from "../../utils/FormGroup";
export default function RadioFormField(props) {
    const { type, values, disable, errors, touched, setFieldValue, accessor, Header, options } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return _jsxs(FormGroup, { children: [_jsx(Form.Label, { children: Header }, void 0), _jsx("div", { children: options.map(option => _jsx(Form.Check, { isInvalid: nestedTouched && nestedError !== undefined, disabled: disable, name: accessor, type: "radio", value: option.value, label: option.label, id: option.value, inline: true, onChange: onChangeRadio, checked: getNestedValue(accessor, values) === option.value }, option.value)) }, void 0)] }, void 0);
}
