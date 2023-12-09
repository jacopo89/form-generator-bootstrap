import BasicFormElementInterface from "../../BasicFormElementInterface";
import {SelectOption} from "./SelectElementInterface";

export interface Tag{
    name:string
}

export interface TagsElementInterface extends BasicFormElementInterface{
    type:"tags"
    options:SelectOption[],
    maxResults:number
}
