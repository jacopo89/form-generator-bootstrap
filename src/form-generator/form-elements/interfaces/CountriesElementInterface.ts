import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface CountriesOption{
    label:string,
    value:string,
}

export interface CountriesElementInterface extends BasicFormElementInterface{
    type:"countries",
}
