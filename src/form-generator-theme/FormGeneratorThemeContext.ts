import React, {SetStateAction} from "react";

export type FormGeneratorTheme = "material-ui" | "bootstrap"

export type FormGeneratorContextType = {
    theme:FormGeneratorTheme,
    setTheme: React.Dispatch<SetStateAction<FormGeneratorTheme>>
}

const formGeneratorThemeValue: FormGeneratorContextType = {
    theme:"material-ui",
    setTheme: () => {}
}
const FormGeneratorThemeContext = React.createContext<FormGeneratorContextType>(formGeneratorThemeValue)

export default FormGeneratorThemeContext
