import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface RadioOption {
    label: string;
    value: string | undefined;
}
export interface RadioFilterElementInterface extends BasicFormElementInterface {
    type: "radio";
    options: RadioOption[];
}
