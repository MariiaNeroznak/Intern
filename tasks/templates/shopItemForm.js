export default (item) => {
  return `
          <div class='header'>Add information about your item.</div>
          <form id='formShopItem' class='form' ${
            item && item.id ? `data-id='${item.id}'` : ''
          }>
            <label for='name' >Name <span class='required'>*</span>: </label>
            <input type='text' name='name' id='name' placeholder='Product name' value='${
              item && item.name ? item.name : ''
            }' required>

            <label for='description'>Description: </label>
            <textarea name='description' id='description' 
                placeholder='Add here some description of your product'>${
                  item && item.description ? item.description : ''
                }</textarea>

            <label for='title'>Title: </label>
            <input type='text' name='title' id='title' placeholder='Here will be title of product' value='${
              item && item.title ? item.title : ''
            }'>
            
            <label for='img'>Image <span class='required'>*</span>: </label>
            <input type='text' name='img' id='img' placeholder='Choose your image and set link here' value='${
              item && item.img ? item.img : ''
            }' required>
            <div class='image-example'>
              <img src='${item && item.img ? item.img : ''}' class='img-fluid'>
            </div>

            <label for='alt'>Image description: </label>
            <input type='text' name='alt' id='alt' placeholder='Add some description of image' value='${
              item && item.alt ? item.alt : ''
            }'>

            <label for='space'>Space: </label>
            <fieldset>
              <legend>Select additional space for description:</legend>
              0 
              <input type='range' id='space' name='space' min='0' max='4' value='${
                item && item.space ? item.space : ''
              }'>
              4
            </fieldset>


            <label for='link'>Item link: </label>
            <input type='url' name='link' id='link' placeholder='Add link href here' value='${
              item && item.link ? item.link : ''
            }'>

            <label for='linkText'>Text on link: </label>
            <input type='text' name='linkText' id='linkText' placeholder='Text on button should be like this' value='${
              item && item.linkText ? item.linkText : ''
            }'>

            <label class='on-inputs-column'>
              <input type='checkbox' name='linkView' id='linkView' ${
                item && item.linkView ? 'checked' : ''
              }> Show link as a button
            </label> 

            <div class='on-inputs-column'>
            <input type='submit' value='${
              item && item.action == 'U' ? 'Update' : 'Insert'
            }' class='btn'>
            </div>
        </form>`;
};
