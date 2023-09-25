import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";


const companyFormElements:FormElements = [
    {
        accessor:"textField",
        type:"text",
        Header:"Text field"
    }
]
const initialValues = {
    textField:null,
}
const validationSchema = Yup.object().shape({
    textField: Yup.string().required('Text field'),
})

const formDescriptor = new FormDescriptor({elements:companyFormElements,initialValues, validationSchema})

export default function TextFieldTest(){
    return <>
        <FormGeneratorContextProvider formDescriptor={formDescriptor} onSubmit={()=>{}}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <div>
                        <section className={"my-3"}>
                            <h3>Text element standard</h3>
                            <FormElement accessor="textField"/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Label manipulation</h3>
                            <hr/>
                            <h5>Custom Label</h5>
                            <FormElement accessor="textField" label={"Custom label"}/>
                            <hr/>
                            <h5>No Label</h5>
                            <FormElement accessor="textField" label={false}/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Placeholder</h3>
                            <hr/>
                            <h5>Placeholder</h5>
                            <FormElement accessor="textField" placeholder={"Custom placeholder"}/>
                            <hr/>
                            <h5>No placeholder</h5>
                            <FormElement accessor="textField" />
                        </section>
                        <button type="submit">SAVE</button>
                    </div>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}
