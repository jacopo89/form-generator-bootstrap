import BasicFormElementInterface, {WithButtonElementInterface} from "../../BasicFormElementInterface";

export interface DictionaryElementInterface extends WithButtonElementInterface{
    type:"dictionary",
    nestedForm:(index:number)=> JSX.Element,
    initialValues: any,
    validationSchema:any,
}
