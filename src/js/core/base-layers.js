import config from "../config";
import Base_tools from "./base-tools";

/**
 * layers 핸들러 클래스
 */
export default class Base_layers {
  constructor() {
    this.canvas = document.getElementById("jsCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.resetBtn = document.getElementById("jsReset");

    this.tools = new Base_tools(this.canvas, this.ctx);
  }

  resetCanvas() {
    const ctx = this.ctx,
      canvas = this.canvas,
      tools = this.tools;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, config.CANVAS_SIZE, config.CANVAS_SIZE);

    ctx.strokeStyle = ctx.fillStyle = config.INITIAL_COLOR;
    canvas.width = canvas.height = config.CANVAS_SIZE;
    ctx.lineWidth = config.LINE_WIDTH;

    tools.resetTools();

    tools.mode().painting();
    tools.toolMode = ["painting", false];
  }

  event() {
    if (this.tools) this.tools.event();
    if (this.canvas) {
      this.resetCanvas();
      this.canvas.addEventListener("mousemove", this.onMouseMove);
      this.canvas.addEventListener("mousedown", this.startPainting);
      this.canvas.addEventListener("mouseup", this.stopPainting);
      this.canvas.addEventListener("mouseleave", this.stopPainting);
      this.canvas.addEventListener("click", this.handleCanvasClick);
      this.canvas.addEventListener("contextmenu", (event) =>
        event.preventDefault()
      );
    }
    if (this.resetBtn)
      this.resetBtn.addEventListener("click", () => this.resetCanvas());
  }

  startPainting = () => {
    const { filling, settingImage } = this.tools.toolMode;
    if (!filling && !settingImage.state)
      this.tools.toolMode = ["painting", true];
  };

  stopPainting = () => {
    this.tools.toolMode = ["painting", false];
  };

  onMouseMove = ({ offsetX: x, offsetY: y }) => {
    const { painting, settingImage } = this.tools.toolMode;
    if (!settingImage.state) {
      if (!painting) {
        this.ctx.beginPath();
        this.ctx.moveTo(x, y);
      } else {
        this.ctx.lineTo(x, y);
        this.ctx.stroke();
      }
    }
  };

  handleCanvasClick = ({ offsetX, offsetY }) => {
    const { filling, settingImage } = this.tools.toolMode;
    if (filling)
      this.ctx.fillRect(0, 0, config.CANVAS_SIZE, config.CANVAS_SIZE);
    if (settingImage.state) {
      const { img, reduceSize } = settingImage,
        width = img.width * reduceSize,
        height = img.height * reduceSize;
      this.ctx.drawImage(
        img,
        offsetX - width / 2,
        offsetY - height / 2,
        width,
        height
      );

      this.tools.toolMode = [
        "settingImage",
        {
          ...settingImage,
          ...{ ["state"]: false },
        },
      ];
      this.tools.settingModeBtn("painting");
    }
  };
}
