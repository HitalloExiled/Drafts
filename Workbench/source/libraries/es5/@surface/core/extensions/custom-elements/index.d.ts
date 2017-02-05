declare namespace CustomElement
{
     interface Options
     {
        extends: any;
     }
}

declare interface CustomElement
{
    define(name: string, constructor: Function, options?: CustomElement.Options);
}

declare interface Window
{
    customElements: CustomElement;
}