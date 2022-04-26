export class ElementList {
  constructor() {
    this._listItems = [];
  }
  #add(item) {
    if (!this._checkItem(item)) return;
    const id = this._getElementId(item);
  }
  #edit(id) {
    this._findItem(id);
  }
  #remove(id) {
    this._findItem(id);
  }
  _checkItem(item) {}
}
