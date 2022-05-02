import { Component } from './component.js';
import getTemplateItem from '../templates/shopItem.js';
import getTemplateAdditor from '../templates/shopAdditions.js';
import getTemplateItemForm from '../templates/shopItemForm.js';
import { Modal } from './modal.js';

export class Shop extends Component {
  static _counter = 15;
  static _imgId = 100;

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
    item.counter = ++this.counter; // "id": 1,

    if (!item.alt) item.alt = ''; // "alt": "Description of image",
    if (!item.img) item.hideImg = true; // "img": "https://picsum.photos/id/20/500/900",

    if (!item.name) item.name = ''; // "name": "Lead text",
    if (!item.description) item.description = ''; // "description": "Lorem ipsum dolor sit amet.",

    if (!item.link) item.link = ''; // "link": "other.html",
    if (!item.linkText) item.linkText = 'click me'; // "linkText": "and link",
    if (!item.linkView || item.linkView !== 'on') item.linkView = ''; // "linkView": "on",

    if (!item.space) item.space = 0; // "space": "3",
  }

  _insertNewItemView(item) {
    if (!item) return;
    const htmlItem = getTemplateItem(item);
    this._wrapper.insertAdjacentHTML('beforeend', htmlItem);
  }

  _editItemView(item) {
    if (!item) return;
    const elem = document.querySelector(
      '.block-item[data-id="' + item.id + '"]'
    );

    let name = elem.querySelector('h2');
    if (!name) {
      name = document.createElement('h2');
      elem.append(name);
    }
    let img = elem.querySelector('img');
    if (!img) {
      img = document.createElement('img');
      elem.append(img);
    }
    let description = elem.querySelector('p');
    if (!description) {
      description = document.createElement('p');
      elem.append(description);
    }
    let link = elem.querySelector('a.stretched-link');
    if (!link) {
      link = document.createElement('a');
      link.classList.add('stretched-link');
      elem.append(link);
    }

    if (item.title) elem.title = item.title;
    if (item.img) img.src = item.img;
    if (item.alt) img.alt = item.alt;
    if (item.name) name.innerText = item.name;
    if (item.description) description.innerText = item.description;
    if (item.space) {
      description.classList.remove(
        'space-0',
        'space-1',
        'space-2',
        'space-3',
        'space-4'
      );
      description.classList.add('space-' + item.space);
    }
    if (item.link) link.href = item.link;
    if (item.linkView === 'on') link.classList.add('btn');
    else link.classList.remove('btn');
    if (item.linkText) link.innerText = item.linkText;
  }

  _removeItemView(elementBlock) {
    elementBlock.remove();
  }

  _beforeItemsLoad() {
    const htmlEditor = getTemplateAdditor();
    this._wrapper.insertAdjacentHTML('beforeend', htmlEditor);
    this._addBlockLink = document.querySelector('.block-item.additor');
  }

  _afterItemsLoad() {
    document.addEventListener('click', async (event) => {
      if (!event) return;

      const target = event.target;
      if (!target) return;
      if (target.tagName !== 'A') return;
      let elementBlock = target.closest('.block-item');
      if (!elementBlock) return;

      this._initItemData();

      const id = elementBlock.dataset.id;
      switch (target.dataset.action) {
        case 'remove':
          if (await this._removeItemOnServer(id)) {
            this._removeItemView(elementBlock);
          }
          break;
        case 'add':
        case 'edit':
          let data;
          if (target.dataset.action === 'edit') {
            data = await this._loadData(id);
            data.action = 'U';
          }
          if (target.dataset.action === 'add') {
            data = {
              img:
                'https://picsum.photos/id/' +
                Shop._imgId +
                '/' +
                this.#getRandomInt(100, 800) +
                '/' +
                this.#getRandomInt(100, 800),
            };
          }
          this._showModal(data);
          break;
      }
    });
    document.addEventListener('submit', async (event) => {
      event.preventDefault();
      this._modal.close();

      const target = event.target;
      if (!target) return;
      if (target.id !== 'formShopItem') return;

      let dataFromForm = new FormData(target);
      let data = {};
      for (let i of dataFromForm) {
        data[i[0]] = i[1];
      }
      const id = target.dataset.id;
      let item;
      if (!id) {
        item = await this._addItemOnServer(data);
      } else {
        data['id'] = id;
        item = await this._editItemOnServer(id, data);
      }

      if (!id) this._checkItemData(item);

      if (id) this._editItemView(item);
      else this._insertNewItemView(item);
    });
  }

  _initItemData() {
    super._initItemData();
    Shop._counter++;
    Shop._imgId++;
  }

  _addItemOnServer(data) {
    return super._addItemOnServer(data);
  }

  #getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  _showModal(data) {
    if (!this._modal) this._modal = new Modal();
    const htmlData = getTemplateItemForm(data);
    this._modal.open(htmlData);
  }
}
