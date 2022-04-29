export default (item) => {
  if (!item) return;
  return `<div class='block-item' title='${item.title}' data-id='${item.id}'>
                <a href='#' class='editor' data-action='edit'>edit</a>
                <a href='#' class='remover' data-action='remove'>remove</a>
                <img src='${item.img}' alt='${item.alt}' class='img-fluid'>
                <h2>${item.name}</h2>
                <p class='space-${item.space}'>${item.description}</p>
                ${
                  item.link
                    ? `<a href='${item.link}' class='stretched-link ${
                        item.linkView === 'on' ? 'btn' : ''
                      }'>${item.linkText}</a>`
                    : ''
                }
            </div>`;
};
