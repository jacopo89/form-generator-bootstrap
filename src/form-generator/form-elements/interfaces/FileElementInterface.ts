import BasicFormElementInterface from "../../BasicFormElementInterface";
import {FileType} from "../../ElementInterface";

export interface FileElementInterface extends BasicFormElementInterface{
    type:"file",
    accept: FileType,
    maxFileSizeMB?: number
}
