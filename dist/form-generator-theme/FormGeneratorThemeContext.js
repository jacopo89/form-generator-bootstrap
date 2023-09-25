import React from "react";
const formGeneratorThemeValue = {
    theme: "material-ui",
    setTheme: () => { }
};
const FormGeneratorThemeContext = React.createContext(formGeneratorThemeValue);
export default FormGeneratorThemeContext;
