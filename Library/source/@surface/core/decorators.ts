export function component(name: string, options?: CustomElement.Options): ClassDecorator
{
    return (target: Function) => window.customElements.define(name, target, options);
}