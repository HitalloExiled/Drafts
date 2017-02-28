import CustomElement from "surfacer/custom-element";
import View          from "surfacer/view";

export function component(name: string, template: string, options?: CustomElementRegistry.Options): ClassDecorator
{
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = templateParse(template);            
        window.customElements.define(name, target, options);
    }
}

export function view(name: string, template: string, master?: Constructor<View>, options?: CustomElementRegistry.Options): ClassDecorator
{
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = templateParse(template);
        window.customElements.define(name, target, options);

        if (master)
        {
            //let masterView = new master();
            //window.customElements.whenDefined(name).then(() => masterView.appendChild(target.prototype));
        }   
    }
}

function templateParse(template: string): HTMLTemplateElement
{    
    return new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector("template") as HTMLTemplateElement;
}