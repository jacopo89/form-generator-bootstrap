import BasicFormElementInterface from "../../BasicFormElementInterface";

export interface Tag{
    name:string
}

export interface TagsElementInterface extends BasicFormElementInterface{
    type:"tags"
}
