export class Component {
  constructor(loader, blockName) {
    if (!blockName) throw new Error('Can not create an empty component');
    this._blockName = blockName;
    this._loader = loader;
  }

  async render(positionPoint) {
    try {
      this._createMainDOM(positionPoint);
      this._showLoader();
      const data = await this._loadData();
      if (!data) throw new Error('Loading error');
      this._checkAndShowItems(data);
    } catch (error) {
      this._showError();
    }
  }

  _createMainDOM(positionPoint) {
    if (!positionPoint) return;
    this._wrapper = document.createElement('div');
    this._wrapper.id = this._blockName;
    positionPoint.append(this._wrapper);
  }

  _showLoader() {
    this._messages = document.createElement('div');
    this._messages.innerHTML = `<div class='loader'>Load ${this._blockName}...</div>`;
    this._wrapper.append(this._messages);
  }

  _removeLoader() {
    this._messages.remove();
  }

  _showError() {
    this._messages.innerHTML = 'Opps, something wrong';
  }

  async _loadData(id) {
    let blockName = this._blockName;
    if (id) blockName += '/' + id;

    const data = await this._loader.read(blockName);

    return data;
  }

  async _checkAndShowItems(data) {
    if (!data) throw new Error('Component data is wrong.');

    this._beforeItemsLoad();

    data.forEach((item, index, data) => {
      this._checkItemData(item);
      this._addAdditionalData(item, index, data);
      this._insertNewItemView(item);
    });

    this._afterItemsLoad();

    this._removeLoader();
  }

  _checkItemData(item) {}
  _addAdditionalData(item, index, data) {}
  _insertNewItemView(item) {}

  _beforeItemsLoad() {}
  _afterItemsLoad() {}

  _initItemData() {}

  _addItemOnServer(data) {
    return this._loader.create(this._blockName, data);
  }

  _editItemOnServer(id, data) {
    if (!id) return false;
    return this._loader.edit(this._blockName, id, data);
  }

  async _removeItemOnServer(id) {
    if (!id) return false;
    return this._loader.remove(this._blockName, id);
  }
}
