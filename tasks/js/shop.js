'use strict';

import getTemplateItem from '../templates/shopItem.js';

export class Shop {
    constructor(loader) {
        this.wrapper = document.getElementById('shop');

        this.counter = 0;
        
        this.loader = loader;
        this.fillShop();
    }

    async loadData(id) {
        let blockName = 'shop';
        if (!id) blockName += '';
        else blockName += '/' + +id;

        const data = await this.loader.loadAndParseBlockData(blockName);
        if (!data) return;  
        
        return data;
    }

    async fillShop() {
        let data = await this.loadData();

        for (let item of data) {
            this.addShopItemToDOM(item);
        }
    }

    addShopItemToDOM(itemData) {
        const htmlObj = this.fillTemplates(itemData);
        if (!htmlObj) return;

        this.wrapper.insertAdjacentHTML('beforeend', htmlObj.item);
    }

    fillTemplates(item) {
        if (!this.checkData(item)) return null;

        const htmlItem = getTemplateItem(item);

        return {item: htmlItem};
    }

    checkData(item) {
        // "id": 1,
        item.counter = ++this.counter;

        // "alt": "Description of image",
        if (!item.alt) item.alt = '';
        // "img": "https://picsum.photos/id/20/500/900",
        if (!item.img) item.hideImg = true;

        // "name": "Lead text",
        if (!item.name) item.name = '';
        // "description": "Lorem ipsum dolor sit amet.",
        if (!item.description) item.description = '';

        // "link": "other.html",
        if (!item.link) item.link = '';
        // "linkText": "and link",
        if (!item.linkText) item.linkText = 'click me';
        // "linkView": "btn",
        if (!item.linkView || item.linkView !== 'btn') item.linkView = '';

        // "space": "3",
        if (!item.space) item.space = 0;
        
        return item;
    }
}