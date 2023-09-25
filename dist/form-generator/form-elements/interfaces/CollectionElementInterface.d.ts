import { WithButtonElementInterface } from "../../BasicFormElementInterface";
import { FormElements } from "../../ElementInterface";
export interface CollectionElementInterface extends WithButtonElementInterface {
    type: "collection";
    formElements: FormElements;
    nestedForm: (index: number) => JSX.Element;
    initialValues: object;
    lockList?: boolean;
}
