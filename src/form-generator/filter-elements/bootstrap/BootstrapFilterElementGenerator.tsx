import React from "react";
import TextFilterField from "./fields/TextFilterField";
import CheckboxFilterField from "./fields/CheckboxFilterField";
import RadioFilterField from "./fields/RadioFilterField";
import SelectFilterField from "./fields/SelectFilterField";
import CountriesFilterField from "./fields/CountriesFilterField";
import {GenericFilterElementInterface} from "../FilterElementGenerator";


export default function BootstrapFilterElementGenerator(props: GenericFilterElementInterface) {
    const {type} = props
    switch(type){
        case "text":
            return <TextFilterField {...props}/>
        case "checkbox":
            return <CheckboxFilterField {...props} />
        case "radio":
            return <RadioFilterField {...props} />
        case "select":
            return <SelectFilterField {...props} />
        case "countries":
            return <CountriesFilterField {...props} />
    }
    return <></>
}
