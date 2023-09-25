import useFormGeneratorThemeContext from "../../form-generator-theme/useFormGeneratorThemeContext";
import React from "react";
import BootstrapButton from "./bootstrap/BootstrapButton";

export default function FormButtonGenerator(){
    const theme = useFormGeneratorThemeContext();
    switch(theme.theme){
        case "material-ui":{
            return <></>
        }
        case "bootstrap":{
            return <BootstrapButton/>
        }
    }
}
