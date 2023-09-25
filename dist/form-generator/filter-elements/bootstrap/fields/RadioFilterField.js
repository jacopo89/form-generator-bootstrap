import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../../form-elements/utils/form-generator-utils";
export default function RadioFilterField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header, options } = props;
    const onChangeRadio = (e) => {
        setFieldValue(e.target.value);
    };
    return _jsxs(_Fragment, { children: [_jsx(Form.Label, { children: Header }, void 0), _jsx("div", { children: options.map(option => _jsx(Form.Check, { name: accessor, type: "radio", value: option.value, label: option.label, id: option.value, inline: true, onChange: onChangeRadio, checked: getNestedValue(accessor, values) === option.value }, void 0)) }, void 0)] }, void 0);
}
