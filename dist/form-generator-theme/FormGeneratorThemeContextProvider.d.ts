import { FormGeneratorTheme } from "./FormGeneratorThemeContext";
interface FormGeneratorThemeContextInterface {
    theme: FormGeneratorTheme;
    children: any;
}
export default function ({ theme: initialTheme, children }: FormGeneratorThemeContextInterface): JSX.Element;
export {};
