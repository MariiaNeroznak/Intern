'use strict';

import getTemplateSlide from '../templates/carouselSlide.js';
import getTemplatePointer from '../templates/carouselPointer.js';

export class Carousel {
    constructor(loader) {
        this.wrapper = document.getElementById('carousel');
        this.slides = this.wrapper.querySelector('.carousel-slides');
        this.pointers = this.wrapper.querySelector('.carousel-pointers');

        this.counter = 0;
        
        this.loader = loader;
        this.fillCarousel();

        // this.addEventNotMoveUp();
    }

    async loadData(id) {
        let blockName = 'carousel';
        if (!id) blockName += '';
        else blockName += '/' + +id;

        const data = await this.loader.loadAndParseBlockData(blockName);
        if (!data) return;  
        
        return data;
    }

    async fillCarousel() {
        let data = await this.loadData();

        for (let item of data) {
            this.addSlideToDOM(item);
        }
    }

    addSlideToDOM(slideData) {
        const htmlObj = this.fillTemplates(slideData);
        if (!htmlObj) return;

        this.slides.insertAdjacentHTML('beforeend', htmlObj.slide);
        this.pointers.insertAdjacentHTML('beforeend', htmlObj.pointer)
    }

    fillTemplates(slide) {
        if (!this.checkData(slide)) return null;

        const htmlSlide = getTemplateSlide(slide);
        const htmlPointer = getTemplatePointer(slide);

        return {slide: htmlSlide, pointer: htmlPointer};
    }

    checkData(slide) {
        // "id": 1,
        slide.pointNum = ++this.counter;

        // "theme": "bg-light" "bg-dark",
        if (!slide.theme || slide.theme !== 'dark') slide.theme = 'light';
        // "description": "Description of image",
        if (!slide.description) slide.description = '';
        // "img": "https://picsum.photos/id/20/500/900",
        if (!slide.img) slide.hideImg = true;

        // "lead": "Lead text",
        if (!slide.lead) slide.lead = '';
        // "text": "Lorem ipsum dolor sit amet.",
        if (!slide.text) slide.text = '';

        // "link": "other.html",
        if (!slide.link) slide.link = '';
        // "linkText": "and link",
        if (!slide.linkText) slide.linkText = 'click me';
        // "linkView": "btn",
        if (!slide.linkView || slide.linkView !== 'btn') slide.linkView = '';
        // "linkTarget": "_blank",
        slide.target = false;
        if (slide?.linkTarget === '_blank') slide.target = true;
        else slide.target = false;
        // "linkTitle": "Be careful the link opens new window",
        if (!slide.linkTitle) slide.linkTitle = '';

        // "xPosition": "x-center" "x-right",
        switch (slide.xPosition) {
            case 'x-right':
            case 'x-center':
                break;
            case 'x-left':
            default:
                slide.xPosition = 'x-left';
                break;
        }
        // "yPosition": "y-center" "y-bottom" "y-top",
        switch (slide.yPosition) {
            case 'y-bottom':
            case 'y-center':
                break;
            case 'y-top':
            default:
                slide.yPosition = 'y-top';
                break;
        }
        // "textAlign": "text-left" "text-center" "text-right",
        switch (slide.textAlign) {
            case 'text-right':
            case 'text-center':
                break;
            case 'text-left':
            default:
                slide.textAlign = 'text-left';
                break;
        }

        // "space": "3",
        if (!slide.space) slide.space = 0;
        // "linkSpace": "1" 1 - 4,
        if (!slide.linkSpace) slide.linkSpace = 0;
        return slide;
    }

    addEventNotMoveUp() {
        console.log("addEventNotMoveUp");
        document.addEventListener('click', function (event) {
            console.clear();
            if (!event.target) return;
            const target = event.target.closest('.carousel-pointers a.point');
            if (!target) return;
            console.log(target);
            console.log(this);
            // event.preventDefault();

        });
        window.addEventListener('scroll', (event) => {
            console.log("scroll");
            console.log(event);
            console.log(this);
        });
    }
}