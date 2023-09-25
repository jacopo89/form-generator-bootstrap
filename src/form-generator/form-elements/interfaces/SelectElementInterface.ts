import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface SelectOption{
    label:string,
    value:string|number|undefined,
}

export default interface SelectElementInterface extends BasicFormElementInterface{
    type:"select",
    options:SelectOption[],

}
