import FormGeneratorThemeContext, {FormGeneratorTheme} from "./FormGeneratorThemeContext";
import {useState} from "react";

interface FormGeneratorThemeContextInterface{
    theme: FormGeneratorTheme
    children:any
}

export default function ({theme:initialTheme,children}:FormGeneratorThemeContextInterface){

    const [theme, setTheme]= useState<FormGeneratorTheme>(initialTheme)

    return <FormGeneratorThemeContext.Provider value={{theme,setTheme}}>
        <FormGeneratorThemeContext.Consumer>
            {()=>{{
                return children
            }}}
        </FormGeneratorThemeContext.Consumer>
    </FormGeneratorThemeContext.Provider>
}
