import CustomElement from "surfacer/custom-element";

export function component(name: string, template: string, style?: string, options?: ElementDefinitionOptions): ClassDecorator
{
    return (target: Constructor<CustomElement>) =>
    {        
        target.prototype.template = templateParse(template, style);
        ShadyCSS.prepareTemplate(target.prototype.template, name, options && options.extends);
        window.customElements.define(name, target, options);
    }
}

export function view(name: string, template: string, style?: string, options?: ElementDefinitionOptions): ClassDecorator
{
    return (target: Constructor<CustomElement>) =>
    {
        target.prototype.template = templateParse(template, style);
        ShadyCSS.prepareTemplate(target.prototype.template, name, options && options.extends);
        window.customElements.define(name, target, options);
    }
}

function templateParse(template: string, style?: string): HTMLTemplateElement
{    
    let templateElement = new DOMParser()
        .parseFromString(template, "text/html")
        .querySelector("template") as HTMLTemplateElement;

    if (style)
    {
        let styleElement = document.createElement("style") as HTMLStyleElement;
        styleElement.innerHTML = style;
        templateElement.content.appendChild(styleElement);
    }

    return templateElement;
}