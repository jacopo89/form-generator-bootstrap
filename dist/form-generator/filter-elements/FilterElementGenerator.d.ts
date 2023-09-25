import { CheckboxFilterElementInterface } from "./interfaces/CheckboxFilterElementInterface";
import { CountriesFilterElementInterface } from "./interfaces/CountriesFilterElementInterface";
import { RadioFilterElementInterface } from "./interfaces/RadioFilterElementInterface";
import SelectFilterElementInterface from "./interfaces/SelectFilterElementInterface";
import { TextFilterElementInterface } from "./interfaces/TextFilterElementInterface";
export declare type GenericFilterElementInterface = TextFilterElementInterface | CheckboxFilterElementInterface | RadioFilterElementInterface | SelectFilterElementInterface | CountriesFilterElementInterface;
export default function FilterElementGenerator(props: GenericFilterElementInterface): JSX.Element;
