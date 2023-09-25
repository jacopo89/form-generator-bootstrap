import React, { SetStateAction } from "react";
export declare type FormGeneratorTheme = "material-ui" | "bootstrap";
export declare type FormGeneratorContextType = {
    theme: FormGeneratorTheme;
    setTheme: React.Dispatch<SetStateAction<FormGeneratorTheme>>;
};
declare const FormGeneratorThemeContext: React.Context<FormGeneratorContextType>;
export default FormGeneratorThemeContext;
