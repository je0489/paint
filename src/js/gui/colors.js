import config from "../config";

export default class Colors {
  static display() {
    document.getElementById("jsColors").innerHTML = config.COLORS.map(
      (color) =>
        `<div class="controls__color jsColor" style="background-color: ${color}"></div>`
    ).join("");
  }
}
