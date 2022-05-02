'use strict';

import { Loader } from './getdata.js';
import { Menu } from './menu.js';
import { Carousel } from './carousel.js';
import { Shop } from './shop.js';

async function doAfterLoadDOM(event) {
  try {
    const loader = new Loader('http://localhost:3001');

    const content = document.getElementById('content');
    const header = document.querySelector('header');

    const menu = new Menu(loader);
    menu.render(header);

    const carousel = new Carousel(loader);
    carousel.render(content);

    const shop = new Shop(loader);
    shop.render(content);
  } catch (error) {
    console.error('Common error: ', error);
  }
}
document.addEventListener('DOMContentLoaded', doAfterLoadDOM);
