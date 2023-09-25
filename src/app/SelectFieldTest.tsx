import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";


const formElements:FormElements = [
    {
        accessor:"selectField",
        type:"select",
        Header:"Select field",
        options:[
            {label: "Padre", value:"padre"},
            {label: "Madre", value:"madre"}
        ]
    }
]
const initialValues = {
    selectField:"",
}
const validationSchema = Yup.object().shape({
    selectField: Yup.number().required('Text field'),
})

const formDescriptor = new FormDescriptor({elements:formElements,initialValues, validationSchema})

export default function SelectFieldTest(){
    return <>
        <FormGeneratorContextProvider formDescriptor={formDescriptor}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <div>
                        <section className={"my-3"}>
                            <h3>Text element standard</h3>
                            <FormElement accessor="selectField"/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Label manipulation</h3>
                            <hr/>
                            <h5>Custom Label</h5>
                            <FormElement accessor="selectField" label={"Custom label"}/>
                            <hr/>
                            <h5>No Label</h5>
                            <FormElement accessor="selectField" label={false}/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Placeholder</h3>
                            <hr/>
                            <h5>Placeholder</h5>
                            <FormElement accessor="selectField" placeholder={"Custom placeholder"}/>
                            <hr/>
                            <h5>No placeholder</h5>
                            <FormElement accessor="selectField" />
                        </section>
                    </div>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}
