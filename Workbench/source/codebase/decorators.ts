export function view(name: string, options?: CustomElementRegistry.Options): ClassDecorator
{
    return <T>(target: Constructor<T>) => target;
}