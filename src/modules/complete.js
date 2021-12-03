import Storage from './storage.js';

export default class Handler {
  static handleChangeInCheckbox(e) {
    if (e.target.tagName === 'INPUT') {
      const { updateData } = Storage;
      const status = e.target.checked;
      const index = e.target.getAttribute('data-id');
      updateData(status, index);
    }
  }
}
