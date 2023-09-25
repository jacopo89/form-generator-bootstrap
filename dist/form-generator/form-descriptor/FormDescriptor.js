import * as Yup from "yup";
export default class FormDescriptor {
    constructor({ elements, validationSchema = Yup.object().shape({}), initialValues }) {
        this.initialValues = initialValues;
        this.elements = elements;
        this.validationSchema = validationSchema;
    }
    addElement(element, initialValue, validationRule) {
        const existingElement = this.elements.find(existingElement => existingElement.accessor === element.accessor);
        if (existingElement === undefined) {
            if (element.type === "collection" || element.type === "embedded") {
                this.elements.push(Object.assign(Object.assign({}, element), { initialValues: initialValue }));
            }
            else {
                this.elements.push(element);
            }
            this.initialValues = Object.assign(Object.assign({}, this.initialValues), { [element.accessor]: initialValue });
            if (validationRule)
                this.validationSchema.shape({ [element.accessor]: validationRule });
        }
    }
}
