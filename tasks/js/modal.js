export class Modal {
  constructor() {
    this.create();
  }

  create() {
    this._wrapper = document.createElement('div');
    this._closeBtn = document.createElement('a');
    this._content = document.createElement('div');
    this._modal = document.createElement('div');

    this._wrapper.classList.add('modal-wrapper');
    this._modal.classList.add('modal');
    this._closeBtn.classList.add('close');
    this._closeBtn.innerHTML = 'Close';
    this._content.classList.add('modal-content');

    this._modal.appendChild(this._closeBtn);
    this._modal.appendChild(this._content);
    this._wrapper.appendChild(this._modal);

    document.body.append(this._wrapper);

    document.addEventListener('click', (event) => {
      if (!event) return;
      let target = event.target.closest('.close');
      if (target) {
        this.close();
        return;
      } else target = event.target;
      if (!target || !target.classList.contains('modal-wrapper')) return;
      this.close();
    });
  }

  open(content) {
    if (!this._wrapper) this.create();
    if (content) this.insertContent(content);
    this._wrapper.classList.remove('hide');
  }

  close() {
    this._wrapper.classList.add('hide');
  }

  insertContent(content) {
    if (!content) return;
    this._content.innerHTML = '';
    this._content.insertAdjacentHTML('beforeend', content);
  }
}
