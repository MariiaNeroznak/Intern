import { Component } from './component.js';
import getTemplateSlide from '../templates/carouselSlide.js';
import getTemplatePointer from '../templates/carouselPointer.js';

export class Carousel extends Component {
  constructor(loader) {
    super(loader, 'carousel');
    this._counter = 0;
  }

  _createMainDOM(positionPoint) {
    if (!positionPoint) return;
    this._wrapper = document.createElement('div');
    this._wrapper.id = this._blockName;
    this._wrapper.classList.add('carousel');
    this._slides = document.createElement('div');
    this._slides.classList.add('carousel-slides');
    this._pointers = document.createElement('div');
    this._pointers.classList.add('carousel-pointers');
    positionPoint.append(this._wrapper);
    this._wrapper.append(this._slides);
    this._wrapper.append(this._pointers);
  }

  _checkItemData(slide) {
    slide.pointNum = ++this._counter; // "id": 1,

    if (!slide.theme || slide.theme !== 'dark') slide.theme = 'light'; // "theme": "bg-light" "bg-dark",
    if (!slide.description) slide.description = ''; // "description": "Description of image",
    if (!slide.img) slide.hideImg = true; // "img": "https://picsum.photos/id/20/500/900",

    if (!slide.lead) slide.lead = ''; // "lead": "Lead text",
    if (!slide.text) slide.text = ''; // "text": "Lorem ipsum dolor sit amet.",

    if (!slide.link) slide.link = ''; // "link": "other.html",
    if (!slide.linkText) slide.linkText = 'click me'; // "linkText": "and link",
    if (!slide.linkView || slide.linkView !== 'btn') slide.linkView = ''; // "linkView": "btn",
    slide.target = false; // "linkTarget": "_blank",
    if (slide?.linkTarget === '_blank') slide.target = true;
    else slide.target = false;
    if (!slide.linkTitle) slide.linkTitle = ''; // "linkTitle": "Be careful the link opens new window",

    switch (
      slide.xPosition // "xPosition": "x-center" "x-right",
    ) {
      case 'x-right':
      case 'x-center':
        break;
      case 'x-left':
      default:
        slide.xPosition = 'x-left';
        break;
    }
    switch (
      slide.yPosition // "yPosition": "y-center" "y-bottom" "y-top",
    ) {
      case 'y-bottom':
      case 'y-center':
        break;
      case 'y-top':
      default:
        slide.yPosition = 'y-top';
        break;
    }
    switch (
      slide.textAlign // "textAlign": "text-left" "text-center" "text-right",
    ) {
      case 'text-right':
      case 'text-center':
        break;
      case 'text-left':
      default:
        slide.textAlign = 'text-left';
        break;
    }

    if (!slide.space) slide.space = 0; // "space": "3",
    if (!slide.linkSpace) slide.linkSpace = 0; // "linkSpace": "1" 1 - 4,
  }

  _addAdditionalData(item, index, data) {
    item.prev = {};
    if (index > 0) item.prev.id = data[index - 1].id;
    else item.prev.id = data[data.length - 1].id;

    item.next = {};
    if (index === data.length - 1) item.next.id = data[0].id;
    else item.next.id = data[index + 1].id;
  }

  _insertNewItemView(item) {
    if (!item) return;
    const htmlSlide = getTemplateSlide(item);
    const htmlPointer = getTemplatePointer(item);
    this._slides.insertAdjacentHTML('beforeend', htmlSlide);
    this._pointers.insertAdjacentHTML('beforeend', htmlPointer);
  }
}
