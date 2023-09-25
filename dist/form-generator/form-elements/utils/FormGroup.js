import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from "react-bootstrap";
export function FormGroup({ children }) {
    return _jsx(Form.Group, Object.assign({ as: "div", style: { position: "relative" } }, { children: children }), void 0);
}
