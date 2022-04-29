export default (item) => {
  if (!item) return;
  return `<a href='${item.link}'>${item.linkText}</a>`;
};
