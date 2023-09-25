import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface CountriesFilterOption{
    label:string,
    value:string,
}

export interface CountriesFilterElementInterface extends BasicFormElementInterface{
    type:"countries",
}
