import * as Yup from "yup";
import {FormElements} from "../form-generator/ElementInterface";
import FormDescriptor from "../form-generator/form-descriptor/FormDescriptor";
import FormGeneratorContextProvider from "../form-generator/form-context/FormGeneratorContextProvider";
import FormElement from "../form-generator/form-elements/FormElement";
import {FormGeneratorContext} from "../esm";


const companyFormElements:FormElements = [
    {
        accessor:"dateField",
        type:"date",
        Header:"Date field"
    }
]
const initialValues = {
    dateField:null,
}
const validationSchema = Yup.object().shape({
    dateField: Yup.date().required('date field'),
})

const formDescriptor = new FormDescriptor({elements:companyFormElements,initialValues, validationSchema})

export default function DateFieldTest(){
    return <>
        <FormGeneratorContextProvider formDescriptor={formDescriptor} onSubmit={()=>{}}>
            <FormGeneratorContext.Consumer>
                {()=>{
                    return <div>
                        <section className={"my-3"}>
                            <h3>Text element standard</h3>
                            <FormElement accessor="dateField"/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Label manipulation</h3>
                            <hr/>
                            <h5>Custom Label</h5>
                            <FormElement accessor="dateField" label={"Custom label"}/>
                            <hr/>
                            <h5>No Label</h5>
                            <FormElement accessor="dateField" label={false}/>
                        </section>
                        <hr/><hr/>
                        <section className={"my-3"}>
                            <h3>Placeholder</h3>
                            <hr/>
                            <h5>Placeholder</h5>
                            <FormElement accessor="dateField" placeholder={"Custom placeholder"}/>
                            <hr/>
                            <h5>No placeholder</h5>
                            <FormElement accessor="dateField" />
                        </section>
                        <button type="submit">save</button>
                    </div>
                }}
            </FormGeneratorContext.Consumer>
        </FormGeneratorContextProvider>
    </>
}
