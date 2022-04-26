export class Product {
  constructor(id, parent) {
    if (!id) return;
    this._id = id;
    if (!parent) return;
    this._parent = parent;
  }
  static add() {
    console.log('add');
  }
  static edit(id) {
    console.log('edit');
  }
  static remove(id) {
    console.log('remove');
  }
}
