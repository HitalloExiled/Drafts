import { BaseElement } from "@surface/base-element";
export declare class Grid extends BaseElement {
    private _initializing;
    private _row;
    rows: any;
    private _columns;
    columns: any;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(attributeName: string, oldValue: string, newValue: string, namespace: string): void;
    adoptedCallback(oldDocument: Document, newDocument: Document): void;
}
