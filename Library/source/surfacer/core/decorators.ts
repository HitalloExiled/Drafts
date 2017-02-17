import {CustomElement} from "surfacer/custom-element"

export function component(name: string, template: string, options?: CustomElementRegistry.Options): ClassDecorator
{
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = new DOMParser()
            .parseFromString(template, "text/html")
            .querySelector("template") as HTMLTemplateElement;
            
        window.customElements.define(name, target, options);
    }
}