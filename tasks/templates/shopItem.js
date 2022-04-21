export default (item) => {
    return `<div class='block-item' title='${item.title}'>
                <img src='${item.img}' alt='${item.alt}' class='img-fluid'>
                <h2>${item.name}</h2>
                <p class='space-${item.space}'>${item.description}</p>
                ${(item.link ?
                    `<a href='${item.link}' class='stretched-link ${item.linkView}'>${item.linkText}</a>`
                : '')}
            </div>`;
}

