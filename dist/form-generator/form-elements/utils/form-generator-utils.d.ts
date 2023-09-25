import { FormElements, GenericElementInterface } from "../../ElementInterface";
export declare const getAccessorElementsNoIndex: (accessor: string) => string[];
export declare const getAccessorElements: (accessor: string) => string[];
export declare const getNestedValue: (accessor: string, obj: any) => any;
export declare const isArrayElementAccessor: (accessor: string) => boolean;
export declare const getNestedFormElement: (accessor: string[], formElements: FormElements) => GenericElementInterface | undefined;
