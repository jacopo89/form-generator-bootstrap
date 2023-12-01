import React from "react";
import {Form} from "react-bootstrap";
import {getNestedValue} from "../../utils/form-generator-utils";
import {FormGroup} from "../../utils/FormGroup";
import {SwitchElementInterface} from "../../interfaces/SwitchElementInterface";

export default function SwitchFormField(props:SwitchElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChange = ()=> setFieldValue(!getNestedValue(accessor,values))
    return <FormGroup>
        <Form.Check name={accessor} type="switch" label={Header} id={accessor} onChange={onChange} checked={getNestedValue(accessor,values)}
                    isInvalid={nestedTouched && nestedError!==undefined}
                    feedback={nestedError}
                    feedbackType="invalid"
                    feedbackTooltip
        />
    </FormGroup>
}
