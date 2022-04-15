'use strict';

import {Loader} from './getdata.js';
import {Carousel} from './carousel.js';


async function doAfterLoadDOM(event) {
    try {
        const loader = new Loader('http://localhost:3001/');
        console.log('App starts to load DOM...');
        const carousel = new Carousel(loader);
        console.log('DOM fully loaded and parsed');
    } catch (error) {
        console.error('Common error', error);
    }
}
document.addEventListener('DOMContentLoaded', doAfterLoadDOM);
