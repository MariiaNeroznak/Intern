export default (slide) => {
  if (!slide) return;
  return `<label for='slide-${slide.id}' title='Move to slide ${slide.pointNum}'>${slide.pointNum}</label>`;
};
