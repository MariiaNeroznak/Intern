export default (item) => {
  return `<form id='formShopItem' class='form' ${
    item && item.id ? `data-id='${item.id}'` : ''
  }>
            <input type='text' name='name' id='name' placeholder='Product name' value='${
              item && item.name ? item.name : ''
            }' required>
            <textarea name='description' id='description' 
                placeholder='Add here some description of your product'>${
                  item && item.description ? item.description : ''
                }</textarea>
            <input type='text' name='title' id='title' placeholder='Here will be title of product' value='${
              item && item.title ? item.title : ''
            }'>
            
            <input type='text' name='img' id='img' placeholder='Choose your image and set link here' value='${
              item && item.img ? item.img : ''
            }' required>
            <input type='text' name='alt' id='alt' placeholder='Add some description of image' value='${
              item && item.alt ? item.alt : ''
            }'>
            <fieldset>
              <legend>Select additional space for description:</legend>
              0 
              <input type='range' id='space' name='space' min='0' max='4' value='${
                item && item.space ? item.space : ''
              }'>
              4
            </fieldset>


            <input type='url' name='link' id='link' placeholder='Add link href here' value='${
              item && item.img ? item.img : ''
            }'>
            <input type='text' name='linkText' id='linkText' placeholder='Text on button should be like this' value='${
              item && item.linkText ? item.linkText : ''
            }'>
            <label>
              <input type='checkbox' name='linkView' id='linkView' ${
                item && item.linkView ? 'checked' : ''
              }> Show link as a button
            </label> 

            <input type='submit' value='${
              item && item.action == 'U' ? 'Update' : 'Insert'
            }' class='btn'>
        </form>`;
};
