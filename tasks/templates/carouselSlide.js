export default (slide) => {
    return `<div id='slide-${slide.id}' class='bg-${slide.theme}'>
                ${(slide.hideImg ? ''  : 
                '<img src=\'' + slide.img + '\' alt=\'' + slide.description + '\'>')}
                <div class='carousel-slide-description ${slide.xPosition} ${slide.yPosition} ${slide.textAlign}'>
                    ${slide.lead ? '<h2>' + slide.lead + '</h2>' : ''}
                    ${slide.text ? '<p class=\'space-' + slide.space + '\'>' + slide.text + '</p>' : ''}
                    ${(slide.link ? 
                    '<p class=\'space-' + slide.linkSpace + '\'>' + 
                        '<a href=\'' + slide.link + '\'' 
                        + (slide.linkTitle ? ' title=\'' + slide.linkTitle + '\'' : '')
                        + (slide.target ? ' target=\'' + slide.linkTarget + '\'' : '') 
                        + (slide.linkView ? ' class=\'stretched-link ' + slide.linkView + '\'' : '') 
                        + '>' + slide.linkText + '</a>' +
                    '</p>'
                    : '')}
                </div>
            </div>`;
}