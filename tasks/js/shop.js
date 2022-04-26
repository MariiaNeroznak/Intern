import { Component } from './component.js';
// import { ProductList } from './productList.js';
import getTemplateItem from '../templates/shopItem.js';
import getTemplateAdditions from '../templates/shopAdditions.js';

export class Shop extends Component {
  constructor(loader) {
    super(loader, 'shop');
    // this._productList = new ProductList();
  }

  _createMainDOM(positionPoint) {
    if (!positionPoint) return;
    this._wrapper = document.createElement('div');
    this._wrapper.id = this._blockName;
    this._wrapper.classList.add('blocks');
    positionPoint.append(this._wrapper);
  }

  _checkItemData(item) {
    item.counter = ++this.counter; // "id": 1,

    if (!item.alt) item.alt = ''; // "alt": "Description of image",
    if (!item.img) item.hideImg = true; // "img": "https://picsum.photos/id/20/500/900",

    if (!item.name) item.name = ''; // "name": "Lead text",
    if (!item.description) item.description = ''; // "description": "Lorem ipsum dolor sit amet.",

    if (!item.link) item.link = ''; // "link": "other.html",
    if (!item.linkText) item.linkText = 'click me'; // "linkText": "and link",
    if (!item.linkView || item.linkView !== 'btn') item.linkView = ''; // "linkView": "btn",

    if (!item.space) item.space = 0; // "space": "3",
  }

  _showItem(item) {
    if (!item) return;
    const htmlItem = getTemplateItem(item);
    // this._productList.add(item);
    this._wrapper.insertAdjacentHTML('beforeend', htmlItem);
  }

  _beforeItemsLoad() {
    // _afterItemsLoad() {
    const htmlEditor = getTemplateAdditions();
    this._wrapper.insertAdjacentHTML('beforeend', htmlEditor);
  }

  _afterItemsLoad() {
    // document.addEventListener('click', Shop.remove);
  }
}
