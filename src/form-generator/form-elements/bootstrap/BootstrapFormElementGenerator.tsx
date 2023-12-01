import React from "react";
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
import {GenericFormElementInterface} from "../FormElementGenerator";
import FormFormField from "./fields/FormFormField";
import TextareaFormField from "./fields/TextareaFormField";
import SwitchFormField from "./fields/SwitchFormField";


export default function BootstrapFormElementGenerator(props: GenericFormElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFormField {...props}/>
        case "select":
            return <SelectFormField  {...props}/>
        case "checkbox":
            return <CheckboxFormField  {...props}/>
        case "radio":
            return <RadioFormField  {...props}/>
        case "wysiwyg":{
            return <WYSIWYGFormField {...props}/>
        }
        case "tags":{
            return <TagsFormField {...props}/>
        }
        case "number":{
            return <NumberFormField {...props}/>
        }
        case "collection":{
            return <CollectionFormField {...props} />
        }
        case "embedded":{
            return <EmbeddedFormField {...props} />
        }
        case "file":{
            return <FileFormField {...props} />
        }
        case "date":{
            return <DateFormField {...props}/>
        }
        case "countries":{
            return <CountriesFormField {...props}/>
        }
        case "password":{
            return <PasswordFormField {...props}/>
        }
        case "float":{
            return <FloatFormField {...props}/>
        }
        case "price":{
            return <PriceFormField {...props}/>
        }
        case "tel":{
            return <TelephoneFormField {...props}/>
        }
        case "dictionary":{
            return <DictionaryFormField {...props}/>
        }
        case "form":{
            return <FormFormField {...props} />
        }
        case "textarea":{
            return <TextareaFormField {...props} />
        }
        case "switch":
            return <SwitchFormField {...props} />
    }
    return <></>
}
