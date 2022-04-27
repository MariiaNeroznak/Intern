'use strict';

// import { Loader } from './getdata.js';

function editItem(event, id) {
  let parent = event.target.closest('.block-item');
  if (!parent) return;
  modal(parent);
}
function removeItem(event, id) {
  let parent = event.target.closest('.block-item');
  if (!parent) return;
  parent.remove();
}
function addItem(event) {
  modal();
}
function modal(element) {
  console.log('show modal');
  let modal = document.createElement('div');
  modal.classList.add('modal');
  // document.append(modal);
}
