import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface RadioOption{
    label:string,
    value:string|undefined,
}

export interface RadioElementInterface extends BasicFormElementInterface{
    type:"radio",
    options:RadioOption[]
}
