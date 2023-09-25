import React from "react";
import {CheckboxFilterElementInterface} from "./interfaces/CheckboxFilterElementInterface";
import {CountriesFilterElementInterface} from "./interfaces/CountriesFilterElementInterface";
import {RadioFilterElementInterface} from "./interfaces/RadioFilterElementInterface";
import SelectFilterElementInterface from "./interfaces/SelectFilterElementInterface";
import {TextFilterElementInterface} from "./interfaces/TextFilterElementInterface";
import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import BootstrapFilterElementGenerator from "./bootstrap/BootstrapFilterElementGenerator";

export type GenericFilterElementInterface =
    TextFilterElementInterface |
    CheckboxFilterElementInterface |
    RadioFilterElementInterface |
    SelectFilterElementInterface |
    CountriesFilterElementInterface

export default function FilterElementGenerator(props: GenericFilterElementInterface) {
    const theme = useFormGeneratorThemeContext();
    switch(theme.theme){
        case "material-ui":{
            return <></>
        }
        case "bootstrap":{
            return <BootstrapFilterElementGenerator {...props}/>
        }
    }
}
