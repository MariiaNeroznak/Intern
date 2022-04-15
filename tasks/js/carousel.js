'use strict';

export class Carousel {
    constructor(loader) {
        this.wrapper = document.getElementById('carousel');
        this.slides = this.wrapper.querySelector('.carousel-slides');
        this.pointers = this.wrapper.querySelector('.carousel-pointers');
        
        this.loader = loader;
        this.fillCarousel();

        // console.log(this);
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
        // add to dom
        // console.table(htmlObj);
        this.slides.append(htmlObj.slide);
        this.slides.append(htmlObj.slide);
    }
    fillTemplates(sld) {
        // console.table(sld);
        // check if id not repeated
        // check image
        // check if theme exist
        // check if position and text align works
        const templSlide = `<div id='slide-${sld.id}' class='${sld?.theme}'>
                            <img src='${sld?.img}' alt='${sld?.description}'>
                            <div class='carousel-slide-description ${sld?.xPosition} ${sld?.yPosition} ${sld?.textAlight}'>
                                <h2>${sld?.lead}</h2>
                                <p class='space-${sld?.space}'>${sld?.text}</p>
                                <p class='space-${sld?.linkSpace}'>
                                    <a href='${sld?.link}' class='stretched-link'>${sld?.linkText}</a>
                                </p>
                            </div>
                        </div>`;
        const templPointer = `<a href='#slide-${sld?.id}' class='point' title='Move to slide ${sld.id}'>${sld.id}</a>`
        return {slide: templSlide, pointer: templPointer};
    }
}