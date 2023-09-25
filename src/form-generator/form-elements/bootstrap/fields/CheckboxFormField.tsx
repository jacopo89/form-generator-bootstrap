import React from "react";
import {Form} from "react-bootstrap";
import {getNestedValue} from "../../utils/form-generator-utils";
import {FormGroup} from "../../utils/FormGroup";
import {CheckboxElementInterface} from "../../interfaces/CheckboxElementInterface";

export default function CheckboxFormField(props:CheckboxElementInterface){
    const {type,values, errors, touched,setFieldValue,accessor,Header} = props
    const nestedError = getNestedValue(accessor,errors)
    const nestedTouched = getNestedValue(accessor,touched)

    const onChange = ()=> setFieldValue(!getNestedValue(accessor,values))
    return <FormGroup>
        <Form.Check name={accessor} type="checkbox" label={Header} id={accessor} onChange={onChange} checked={getNestedValue(accessor,values)}
                    isInvalid={nestedTouched && nestedError!==undefined}
                    feedback={nestedError}
                    feedbackType="invalid"
                    feedbackTooltip
        />
    </FormGroup>
}
