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
    slide.pointNum = ++this._counter;

    if (!slide.theme || slide.theme !== 'dark') slide.theme = 'light';
    if (!slide.description) slide.description = '';
    if (!slide.img) slide.hideImg = true;

    if (!slide.lead) slide.lead = '';
    if (!slide.text) slide.text = '';

    if (!slide.link) slide.link = '';
    if (!slide.linkText) slide.linkText = 'click me';
    if (!slide.linkView || slide.linkView !== 'btn') slide.linkView = '';
    slide.target = false;
    if (slide?.linkTarget === '_blank') slide.target = true;
    else slide.target = false;
    if (!slide.linkTitle) slide.linkTitle = '';

    if (slide.xPosition !== 'x-right' && slide.xPosition !== 'x-center')
      slide.xPosition = 'x-left';
    if (slide.yPosition !== 'y-bottom' && slide.yPosition !== 'y-center')
      slide.yPosition = 'y-top';
    if (slide.textAlign !== 'text-right' && slide.textAlign !== 'text-center')
      slide.textAlign = 'text-left';

    if (!slide.space) slide.space = 0;
    if (!slide.linkSpace) slide.linkSpace = 0;
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
