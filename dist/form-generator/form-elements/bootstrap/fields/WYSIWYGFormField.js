import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { getNestedValue } from "../../utils/form-generator-utils";
const modules = {
    history: {
        delay: 2000,
        maxStack: 500,
        userOnly: true
    }
};
export default function WYSIWYGFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const formValue = useMemo(() => getNestedValue(accessor, values), [accessor, values]);
    const [value, setValue] = useState(formValue);
    const updateValueForm = useCallback(() => {
        if (value !== formValue) {
            setFieldValue(value);
        }
    }, [values, value, accessor]);
    const updateFromForm = useCallback(() => {
        if (value !== formValue) {
            setValue(formValue);
        }
    }, [value, formValue]);
    useEffect(() => {
        updateFromForm();
    }, [values]);
    useEffect(() => { updateValueForm(); }, [value]);
    return _jsxs("div", Object.assign({ className: "my-3" }, { children: [_jsx("p", { children: Header }, void 0), _jsx(ReactQuill, { className: "form-group", modules: modules, theme: "snow", value: value, onChange: (content) => { setValue(content); } }, void 0)] }), void 0);
}
