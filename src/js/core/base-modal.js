export default class Base_modal {
  constructor(classname, msg) {
    this.classname = classname;
    this.ui = msg;
  }

  showModal({ parentNode }) {
    parentNode.after(this.ui);
  }

  closeModal() {
    this.ui.remove();
  }

  createHTML(msg) {
    const ui = document.createElement("ui");
    ui.classList.add("modal", `modal-${this.classname}`);
    ui.innerHTML = `<p>${msg}</p>`;
    return ui;
  }

  get ui() {
    return this._ui;
  }

  set ui(msg) {
    this._ui = this.createHTML(msg);
  }
}
