import {CustomElement} from "@surface/core/custom-element";

export abstract class View extends CustomElement
{
    private _isMasterView: boolean = false;

    get fullName(): boolean
    {
        return this._isMasterView;
    }
}