import FormGeneratorThemeContext from "./FormGeneratorThemeContext";
import { useContext } from "react";
export default function useFormGeneratorThemeContext() {
    const { theme, setTheme } = useContext(FormGeneratorThemeContext);
    return { theme, setTheme };
}
