import { jsx as _jsx } from "react/jsx-runtime";
import FormGeneratorThemeContext from "./FormGeneratorThemeContext";
import { useState } from "react";
export default function ({ theme: initialTheme, children }) {
    const [theme, setTheme] = useState(initialTheme);
    return _jsx(FormGeneratorThemeContext.Provider, Object.assign({ value: { theme, setTheme } }, { children: _jsx(FormGeneratorThemeContext.Consumer, { children: () => {
                {
                    return children;
                }
            } }, void 0) }), void 0);
}
