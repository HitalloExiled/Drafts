/**
 * The CustomElementRegistry interface provides methods for registering
 * custom elements and querying registered elements
 */
declare namespace CustomElementRegistry
{
     interface Options
     {
        extends: any;
     }
}

declare interface CustomElementRegistry
{
    /** Defines a new custom element. */
    define<T extends HTMLElement>(name: string, constructor: Constructor<T>, options?: CustomElementRegistry.Options): Constructor<T>;
    
    /** returns the constructor for a previously-defined custom element. */
    get(name: string): Constructor<HTMLElement>;

    /** returns a Promise that resolves when the named element is defined. */
    whenDefined(name: string): Promise<void>;
}

declare interface Window
{
    customElements: CustomElementRegistry;
}