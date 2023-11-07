import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorThemeContextProvider from "../form-generator-theme/FormGeneratorThemeContextProvider";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";


const companyFormElements:FormElements = [
    {
        accessor:"companyName",
        type:"tags",
        Header:"Company name"
    }
]
const initialValues = {
    companyName:[],
}
const validationSchema = Yup.object().shape({
    //companyName: Yup.string().required('Company name is required'),
})

const formDescriptor = new FormDescriptor({elements:companyFormElements,initialValues, validationSchema})

export default function TagsFieldTest(){

    return <>
        <FormGeneratorContextProvider formDescriptor={formDescriptor}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <TextElement/>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}

const TextElement= () => {
    const options = [
        {label:"VALORE 1", value:"Valore 1"},
        {label:"VALORE 2", value:"Valore 2"},
        {label:"VALORE 3", value:"Valore 3"},
        {label:"VALORE 4", value:"Valore 4"},
        {label:"VALORE 5", value:"Valore 5"},
        {label:"VALORE 6", value:"Valore 6"},
        {label:"VALORE 7", value:"Valore 7"},
        {label:"VALORE 8", value:"Valore 8"},
    ]
    return <>
        <FormElement accessor="companyName" options={options}/>
    </>
}
