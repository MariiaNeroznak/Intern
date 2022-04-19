'use strict';

import getTemplateItem from '../templates/menuItem.js';

export class Menu {
    constructor(loader) {
        this.wrapper = document.getElementById('menu');

        // this.counter = 0;
        
        this.loader = loader;
        this.fillMenu();
    }

    async loadData(id) {
        let blockName = 'menu';
        if (!id) blockName += '';
        else blockName += '/' + +id;

        const data = await this.loader.loadAndParseBlockData(blockName);
        if (!data) return;  
        
        return data;
    }

    async fillMenu() {
        let data = await this.loadData();

        for (let item of data) {
            this.addMenuItemToDOM(item);
        }
    }

    addMenuItemToDOM(itemData) {
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

        // "link": "other.html",
        if (!item.link) item.link = '';
        // "linkText": "and link",
        if (!item.linkText) item.linkText = 'click me';

        return item;
    }
}