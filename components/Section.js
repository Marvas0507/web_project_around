export default class Section {
  constructor({ items, renderer }, cardsSectionSelector) {
    this._rendererItems = items;
    this._renderer = renderer;
    this._section = document.querySelector(cardsSectionSelector);
  }

  addItem(element) {
    this._section.append(element);
  }

  renderItems() {
    this._rendererItems.forEach((item) => {
      this._renderer(item);
    });
  }
}