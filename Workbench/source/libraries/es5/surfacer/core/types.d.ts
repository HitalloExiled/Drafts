declare interface Constructor<T> extends Function
{
    new():     T;
    prototype: T;
}

declare type Nullable<T> = T|null|undefined;