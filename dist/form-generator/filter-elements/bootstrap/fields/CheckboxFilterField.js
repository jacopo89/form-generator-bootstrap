import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../../form-elements/utils/form-generator-utils";
export default function CheckboxFilterField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const onChange = () => setFieldValue(!getNestedValue(accessor, values));
    return _jsx(_Fragment, { children: _jsx(Form.Check, { name: accessor, type: "checkbox", label: Header, id: accessor, onChange: onChange, checked: getNestedValue(accessor, values) }, void 0) }, void 0);
}
