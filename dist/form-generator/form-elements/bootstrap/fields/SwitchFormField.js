import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
import { getNestedValue } from "../../utils/form-generator-utils";
import { FormGroup } from "../../utils/FormGroup";
export default function SwitchFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const onChange = () => setFieldValue(!getNestedValue(accessor, values));
    return _jsx(FormGroup, { children: _jsx(Form.Check, { name: accessor, type: "switch", label: Header, id: accessor, onChange: onChange, checked: getNestedValue(accessor, values), isInvalid: nestedTouched && nestedError !== undefined, feedback: nestedError, feedbackType: "invalid", feedbackTooltip: true }, void 0) }, void 0);
}
