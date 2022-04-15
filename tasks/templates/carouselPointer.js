export default (slide) => {
    return `<a href='#slide-${slide.id}' class='point' title='Move to slide ${slide.pointNum}'>${slide.pointNum}</a>`;
}

