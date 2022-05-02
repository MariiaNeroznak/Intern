export default (slide) => {
    if (!slide) return;
    return `<div class='bg-${slide.theme}'>
                <input type='radio' id='slide-${slide.id}' class='slide-item' name='slider'>
                ${(slide.hideImg ? ''  : 
                `<img src='${slide.img}'  alt='${slide.description}'>`)}
                <div class='carousel-slide-description ${slide.xPosition} ${slide.yPosition} ${slide.textAlign}'>
                    ${slide.lead ? `<h2>${slide.lead}</h2>` : ''}
                    ${slide.text ? `<p class='space-${slide.space}'>${slide.text}</p>` : ''}
                    ${(slide.link ? 
                    `<p class='space-${slide.linkSpace}'>
                        <a href='${slide.link}' 
                            ${(slide.linkTitle ? ` title='${slide.linkTitle}` : '')}
                            ${(slide.target ? ` target='${slide.linkTarget}` : '')}
                            ${(slide.linkView ? ` class='stretched-link ${slide.linkView}'` : '')}
                        >${slide.linkText}</a>
                    </p>`
                    : '')}
                </div>
                ${slide.prev ? `<label for='slide-${slide.prev.id}' title='Move to slide ${slide.prev.num}' class='prev arrow-btn'>Prev</label>` : ''}
                ${slide.next ? `<label for='slide-${slide.next.id}' title='Move to slide ${slide.next.num}' class='next arrow-btn'>Next</label>` : ''}
            </div>`;
}