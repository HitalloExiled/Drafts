import View   from "surfacer/view";
import {view} from "surfacer/core/decorators";

const template = require("index.html");
const style    = require("index.scss");

@view("view-login", template, style)
export default class Login extends View
{
    constructor()
    {
        super();
    }

    public connectedCallback(): void
    { }
    
    public disconnectedCallback(): void
    { }

    public attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void
    { }
    
    public adoptedCallback(oldDocument: Document, newDocument: Document): void
    { }
}