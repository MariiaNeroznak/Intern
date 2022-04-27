import { Component } from './component.js';
import getTemplateItem from '../templates/shopItem.js';
import getTemplateAdditions from '../templates/shopAdditions.js';
import { Product } from './product.js';

export class Shop extends Component {
  constructor(loader) {
    super(loader, 'shop');
  }

  _createMainDOM(positionPoint) {
    if (!positionPoint) return;
    this._wrapper = document.createElement('div');
    this._wrapper.id = this._blockName;
    this._wrapper.classList.add('blocks');
    positionPoint.append(this._wrapper);
  }

  _checkItemData(item) {
    this.#checkItemData(item);
  }
  #checkItemData(item) {
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
    this._wrapper.insertAdjacentHTML('beforeend', htmlItem);
  }

  _beforeItemsLoad() {}

  _afterItemsLoad() {
    const htmlEditor = getTemplateAdditions();
    this._wrapper.insertAdjacentHTML('beforeend', htmlEditor);
    this._addBlockLink = document.querySelector('.block-item.additor');

    document.addEventListener('click', (event) => {
      if (!event) return;

      const target = event.target;
      if (!target) return;
      if (target.tagName !== 'A') return;
      let parent = target.closest('.block-item');
      if (!parent) return;

      let product = new Product(this._loader);

      const id = parent.dataset.id;
      switch (target.dataset.action) {
        case 'remove':
          if (product.remove()) parent.remove();
          break;
        case 'edit':
          product.edit();
          break;
        case 'add':
          const item = product.add();
          if (!item) return;
          this._checkItemData(item);
          const htmlItem = getTemplateItem(item);
          this._addBlockLink.insertAdjacentHTML('beforebegin', htmlItem);
          break;
        default:
          break;
      }
    });
  }
}
