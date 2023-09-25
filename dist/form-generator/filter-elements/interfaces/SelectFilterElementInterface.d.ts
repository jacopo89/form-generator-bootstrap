import BasicFormElementInterface from "../../BasicFormElementInterface";
export interface SelectFilterOption {
    label: string;
    value: string | number | undefined;
}
export default interface SelectFilterElementInterface extends BasicFormElementInterface {
    type: "select";
    options: SelectFilterOption[];
}
