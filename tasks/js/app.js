'use strict';

import {Loader} from './getdata.js';
import {Menu} from './menu.js';
import {Carousel} from './carousel.js';
import {Shop} from './shop.js';


async function doAfterLoadDOM(event) {
    try {
        const loader = new Loader('http://localhost:3001/');
        // console.log('App starts to load DOM...');
        const menu = new Menu(loader);
        const carousel = new Carousel(loader);
        const shop = new Shop(loader);
        // console.log('DOM fully loaded and parsed');
    } catch (error) {
        console.error('Common error', error);
    }
}
document.addEventListener('DOMContentLoaded', doAfterLoadDOM);
