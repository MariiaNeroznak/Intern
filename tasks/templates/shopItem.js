export default (item) => {
  return `<div class='block-item' title='${item.title}'>
                <a href='#' class='editor' item-id='${item.id}'>edit</a>
                <a href='#' class='remover' item-id='${item.id}'>remove</a>
                <img src='${item.img}' alt='${item.alt}' class='img-fluid'>
                <h2>${item.name}</h2>
                <p class='space-${item.space}'>${item.description}</p>
                ${
                  item.link
                    ? `<a href='${item.link}' class='stretched-link ${item.linkView}'>${item.linkText}</a>`
                    : ''
                }
            </div>`;
};
