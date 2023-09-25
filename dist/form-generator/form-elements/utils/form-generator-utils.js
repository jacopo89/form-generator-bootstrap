export const getAccessorElementsNoIndex = (accessor) => {
    return accessor.split(".").map(item => removeIndex(item));
};
export const getAccessorElements = (accessor) => {
    return accessor.split(".").map(stringAccessor => getAccessorWithIndexes(stringAccessor)).flat();
};
const getAccessorWithIndexes = (accessor) => {
    const matchedValues = accessor.match(regexpModifications);
    if (matchedValues) {
        let accessors = [];
        let initialAccessor = accessor;
        matchedValues.forEach(matchedValue => initialAccessor = accessor.replaceAll(matchedValue, ""));
        const indexes = matchedValues.map(matchedValue => matchedValue.slice(1, -1));
        accessors.push(initialAccessor, ...indexes);
        return accessors;
    }
    return [accessor];
};
const regexpModifications = /\[.*?\]/g;
const removeIndex = (accessor) => {
    const matchedValues = accessor.match(regexpModifications);
    if (matchedValues) {
        let initialAccessor = accessor;
        matchedValues.forEach(matchedValue => initialAccessor = accessor.replaceAll(matchedValue, ""));
        return initialAccessor;
    }
    return accessor;
};
export const getNestedValue = (accessor, obj) => {
    return getAccessorElements(accessor).reduce((previousValue, currentValue) => {
        if (previousValue)
            return previousValue[currentValue];
        return undefined;
    }, obj);
};
export const isArrayElementAccessor = (accessor) => {
    return accessor.endsWith("]");
};
export const getNestedFormElement = (accessor, formElements) => {
    let formElementsPool = formElements;
    let result = undefined;
    accessor.forEach(item => {
        const nestedFormElement = formElementsPool.find(formElement => formElement.accessor === item);
        if (nestedFormElement && (nestedFormElement === null || nestedFormElement === void 0 ? void 0 : nestedFormElement.type) !== "collection")
            result = nestedFormElement;
        // @ts-ignore
        formElementsPool = nestedFormElement.formElements;
    });
    return result;
};
