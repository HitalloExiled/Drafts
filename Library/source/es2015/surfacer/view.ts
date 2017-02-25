import CustomElement from "surfacer/custom-element";

abstract class View extends CustomElement
{
    private _isMasterView: boolean = false;

    get fullName(): boolean
    {
        return this._isMasterView;
    }
}

export default View;