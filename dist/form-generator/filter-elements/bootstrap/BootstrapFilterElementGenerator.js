import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import TextFilterField from "./fields/TextFilterField";
import CheckboxFilterField from "./fields/CheckboxFilterField";
import RadioFilterField from "./fields/RadioFilterField";
import SelectFilterField from "./fields/SelectFilterField";
import CountriesFilterField from "./fields/CountriesFilterField";
export default function BootstrapFilterElementGenerator(props) {
    const { type } = props;
    switch (type) {
        case "text":
            return _jsx(TextFilterField, Object.assign({}, props), void 0);
        case "checkbox":
            return _jsx(CheckboxFilterField, Object.assign({}, props), void 0);
        case "radio":
            return _jsx(RadioFilterField, Object.assign({}, props), void 0);
        case "select":
            return _jsx(SelectFilterField, Object.assign({}, props), void 0);
        case "countries":
            return _jsx(CountriesFilterField, Object.assign({}, props), void 0);
    }
    return _jsx(_Fragment, {}, void 0);
}
