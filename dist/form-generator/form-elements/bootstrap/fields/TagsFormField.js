import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
// @ts-ignore
import ReactTags from "react-tag-autocomplete";
import { getNestedValue } from "../../utils/form-generator-utils";
import { Form } from "react-bootstrap";
//import "../tagsStyle.css"
export default function TagsFormField(props) {
    const { type, values, errors, touched, setFieldValue, accessor, Header } = props;
    const [tags, setTags] = useState([]);
    const nestedError = getNestedValue(accessor, errors);
    const nestedTouched = getNestedValue(accessor, touched);
    const hasError = nestedTouched && nestedError !== undefined;
    const onTagDelete = (i) => {
        const newTags = [...tags];
        newTags.splice(i, 1);
        setTags(newTags);
        setFieldValue(newTags.map(newKeyword => newKeyword.name));
    };
    useEffect(() => {
        const formTags = values[accessor].map((element) => { return { name: element }; });
        if (values && formTags !== tags) {
            setTags(formTags);
        }
    }, [values]);
    const onTagAddition = (tag) => {
        const newTags = [...tags, tag];
        setTags(() => {
            return newTags;
        });
        setFieldValue(newTags.map(newKeyword => newKeyword.name));
    };
    return _jsxs("div", { children: [_jsx(Form.Label, { children: Header }, void 0), _jsx(ReactTags, { minQueryLength: 0, tags: tags, allowNew: true, onDelete: onTagDelete, onAddition: onTagAddition, placeholderText: Header }, void 0), _jsx("span", Object.assign({ style: { visibility: hasError ? "visible" : "hidden" }, className: "small text-danger" }, { children: nestedError !== null && nestedError !== void 0 ? nestedError : "error" }), void 0)] }, void 0);
}
