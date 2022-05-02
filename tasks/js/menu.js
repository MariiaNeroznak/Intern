import { Component } from './component.js';
import getTemplateItem from '../templates/menuItem.js';

export class Menu extends Component {
  constructor(loader) {
    super(loader, 'menu');
    this._counter = 0;
  }

  _createMainDOM(positionPoint) {
    if (!positionPoint) return;
    this._wrapper = document.createElement('nav');
    this._wrapper.id = this._blockName;
    this._wrapper.classList.add('main-menu');
    positionPoint.append(this._wrapper);
  }

  _checkItemData(item) {
    item._counter = ++this._counter;
    if (!item.link) item.link = '';
    if (!item.linkText) item.linkText = 'click me';
  }

  _insertNewItemView(item) {
    if (!item) return;
    const htmlItem = getTemplateItem(item);
    this._wrapper.insertAdjacentHTML('beforeend', htmlItem);
  }
}
