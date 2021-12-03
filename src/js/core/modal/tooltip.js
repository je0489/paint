import config from "../../config";
import Base_modal from "../base-modal";

export default class Tooltip extends Base_modal {
  constructor() {
    super("tooltip", config.MSG.HOVER_IN_POINTER_BNT);
  }

  showModal({ parentNode }) {
    super.showModal(parentNode);
  }
}
