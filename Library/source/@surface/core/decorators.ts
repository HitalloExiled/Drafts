import {CustomElement} from "@surface/custom-element"

export function component(name: string, template: string, options?: CustomElementRegistry.Options): ClassDecorator
{
    return <T extends Constructor<CustomElement>>(target: T) =>
    {   
        let connectedCallback = target.prototype.connectedCallback;

        target.prototype.connectedCallback = function (this: CustomElement)
        {
            //if (initializing)
            //{
                let element = new DOMParser()
                    .parseFromString(template, "text/html")
                    .querySelector("template") as HTMLTemplateElement;

                this.applyTemplate(element);
            //}

            //initializing = false;

            connectedCallback.apply(this);
        }

        //return instance;

        window.customElements.define(name, target, options);
    }
}