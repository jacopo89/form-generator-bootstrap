import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import SelectFormField from "./fields/SelectFormField";
import TextFormField from "./fields/TextFormField";
import RadioFormField from "./fields/RadioFormField";
import CheckboxFormField from "./fields/CheckboxFormField";
import WYSIWYGFormField from "./fields/WYSIWYGFormField";
import TagsFormField from "./fields/TagsFormField";
import NumberFormField from "./fields/NumberFormField";
import CollectionFormField from "./fields/CollectionFormField";
import EmbeddedFormField from "./fields/EmbeddedFormField";
import FileFormField from "./fields/FileFormField";
import DateFormField from "./fields/DateFormField";
import TelephoneFormField from "./fields/TelephoneFormField";
import CountriesFormField from "./fields/CountriesFormField";
import PasswordFormField from "./fields/PasswordFormField";
import FloatFormField from "./fields/FloatFormField";
import PriceFormField from "./fields/PriceFormField";
import DictionaryFormField from "./fields/DictionaryFormField";
import FormFormField from "./fields/FormFormField";
export default function BootstrapFormElementGenerator(props) {
    const { type } = props;
    switch (type) {
        case "text":
            return _jsx(TextFormField, Object.assign({}, props), void 0);
        case "select":
            return _jsx(SelectFormField, Object.assign({}, props), void 0);
        case "checkbox":
            return _jsx(CheckboxFormField, Object.assign({}, props), void 0);
        case "radio":
            return _jsx(RadioFormField, Object.assign({}, props), void 0);
        case "wysiwyg": {
            return _jsx(WYSIWYGFormField, Object.assign({}, props), void 0);
        }
        case "tags": {
            return _jsx(TagsFormField, Object.assign({}, props), void 0);
        }
        case "number": {
            return _jsx(NumberFormField, Object.assign({}, props), void 0);
        }
        case "collection": {
            return _jsx(CollectionFormField, Object.assign({}, props), void 0);
        }
        case "embedded": {
            return _jsx(EmbeddedFormField, Object.assign({}, props), void 0);
        }
        case "file": {
            return _jsx(FileFormField, Object.assign({}, props), void 0);
        }
        case "date": {
            return _jsx(DateFormField, Object.assign({}, props), void 0);
        }
        case "countries": {
            return _jsx(CountriesFormField, Object.assign({}, props), void 0);
        }
        case "password": {
            return _jsx(PasswordFormField, Object.assign({}, props), void 0);
        }
        case "float": {
            return _jsx(FloatFormField, Object.assign({}, props), void 0);
        }
        case "price": {
            return _jsx(PriceFormField, Object.assign({}, props), void 0);
        }
        case "tel": {
            return _jsx(TelephoneFormField, Object.assign({}, props), void 0);
        }
        case "dictionary": {
            return _jsx(DictionaryFormField, Object.assign({}, props), void 0);
        }
        case "form": {
            return _jsx(FormFormField, Object.assign({}, props), void 0);
        }
    }
    return _jsx(_Fragment, {}, void 0);
}
