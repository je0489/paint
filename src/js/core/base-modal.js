export default class Base_modal {
  constructor(classname, msg) {
    this.ui = document.createElement("ui");
    this.classname = classname;
    this.msg = msg;
  }

  showModal({ parentNode }) {
    parentNode.after(this.ui);
  }

  closeModal() {
    this.ui.remove();
  }

  createHTML(msg) {
    this.ui.classList.add("modal", `modal-${this.classname}`);
    this.ui.innerHTML = `<p>${msg}</p>`;
    return this.ui;
  }

  /**
   * 인스턴스 생성 시 메세지를 html 문자열로 변환.
   * @param {string} msg: The message to be displayed in the modal
   */
  set msg(msg) {
    this._msg = this.createHTML(msg);
  }
}
