declare namespace CustomElementRegistry
{
     interface Options
     {
        extends: any;
     }
}

declare interface CustomElementRegistry
{
    define<T extends HTMLElement>(name: string, constructor: Constructor<T>, options?: CustomElementRegistry.Options): T;
}

declare interface Window
{
    customElements: CustomElementRegistry;
}