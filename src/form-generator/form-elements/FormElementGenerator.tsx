import React from "react";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFormElementGenerator from "./bootstrap/BootstrapFormElementGenerator";

import {TextElementInterface} from "./interfaces/TextElementInterface";
import {CheckboxElementInterface} from "./interfaces/CheckboxElementInterface";
import {CollectionElementInterface} from "./interfaces/CollectionElementInterface";
import {CountriesElementInterface} from "./interfaces/CountriesElementInterface";
import {DateElementInterface} from "./interfaces/DateElementInterface";
import {DictionaryElementInterface} from "./interfaces/DictionaryElementInterface";
import {EmbeddedElementInterface} from "./interfaces/EmbeddedElementInterface";
import {FileElementInterface} from "./interfaces/FileElementInterface";
import {FloatElementInterface} from "./interfaces/FloatElementInterface";
import {NumberElementInterface} from "./interfaces/NumberElementInterface";
import {PasswordElementInterface} from "./interfaces/PasswordElementInterface";
import {PriceElementInterface} from "./interfaces/PriceElementInterface";
import {RadioElementInterface} from "./interfaces/RadioElementInterface";
import SelectElementInterface from "./interfaces/SelectElementInterface";
import {TagsElementInterface} from "./interfaces/TagElementInterface";
import {TelephoneElementInterface} from "./interfaces/TelephoneElementInterface";
import {WYSIWYGElementInterface} from "./interfaces/WYSIWYGElementInterface";
import {SwitchElementInterface} from "./interfaces/SwitchElementInterface";
import {FormElementInterface} from "./interfaces/FormElementInterface";

export type GenericFormElementInterface =
    TextElementInterface |
    SelectElementInterface |
    RadioElementInterface |
    CheckboxElementInterface |
    WYSIWYGElementInterface |
    TagsElementInterface |
    NumberElementInterface |
    CollectionElementInterface |
    EmbeddedElementInterface |
    FileElementInterface |
    DateElementInterface |
    CountriesElementInterface |
    PasswordElementInterface |
    FloatElementInterface |
    PriceElementInterface |
    TelephoneElementInterface |
    DictionaryElementInterface |
    SwitchElementInterface |
    FormElementInterface

export default function FormElementGenerator(props:GenericFormElementInterface) {
    const theme = useFormGeneratorThemeContext();
    switch(theme.theme){
        case "material-ui":{
            return <></>
        }
        case "bootstrap":{
            return <BootstrapFormElementGenerator {...props}/>
        }
    }
}
