import config from "../../config";
import Base_modal from "../base-modal";

export default class Message extends Base_modal {
  constructor() {
    super("message", config.MSG.SELECTED_FILE_OPEN_BTN);
  }

  showModal() {
    super.showModal(document.getElementById("jsCanvas"));
  }
}
