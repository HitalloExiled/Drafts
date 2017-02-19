import { CustomElement } from "surfacer/custom-element";
import { View }          from "surfacer/view";

export function component(name: string, template: string, options?: CustomElementRegistry.Options): ClassDecorator
{
    let x = "component"; x = ""
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = templateParse(template);            
        window.customElements.define(name, target, options);
    }
}

export function view(name: string, template: string, master?: View, options?: CustomElementRegistry.Options): ClassDecorator
{
    let x = "view"; x = ""
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = templateParse(template);
        window.customElements.define(name, target, options);
    }
}

function templateParse(template: string): HTMLTemplateElement
{
    let x = "templateParse"; x = ""
    return new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector("template") as HTMLTemplateElement;
}