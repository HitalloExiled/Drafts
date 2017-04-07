declare module "*.html"
{
    const _: string
    export default _;
}

declare module "*.css"
{
    const _: string
    export default _;
}

declare module "*.scss"
{
    const _: string
    export default _;
}

declare interface ShadyCSS
{
    prepareTemplate(templateElement: HTMLTemplateElement, elementName: string, elementExtension?: string);
    styleElement(element: HTMLElement);
    styleSubtree(element: HTMLElement, overrideProperties: any);
    styleDocument(overrideProperties: any);
    getComputedStyleValue(element: HTMLElement, propertyName: string): any;
    
    nativeCss:    boolean,
    nativeShadow: boolean
}

declare var ShadyCSS: ShadyCSS;

declare interface Constructor<T> extends Function
{
    new():     T;
    prototype: T;
}

declare type Nullable<T> = T|null|undefined;