import FormGeneratorThemeContext, {FormGeneratorContextType} from "./FormGeneratorThemeContext";
import {useContext} from "react";

export default function useFormGeneratorThemeContext():FormGeneratorContextType{
    const {theme,setTheme} =  useContext(FormGeneratorThemeContext)
    return {theme,setTheme}
}
