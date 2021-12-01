import config from "../config";
import Colors from "../gui/colors";
import Tooltip from "./modal/tooltip";

/**
 * Tools 핸들러 클래스
 * @param {canvas} canvas
 * @param {canvas.context} ctx
 */
export default class Base_tools {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.openBtn = document.getElementById("jsOpen");
    this.saveBtn = document.getElementById("jsSave");

    this.rangeBtn = document.getElementById("jsSelectRange");
    this.rangeDiv = document.getElementById("jsRangeDiv");
    this.range = document.getElementById("jsRange");

    this.pointerBtn = document.getElementById("jsPointer");
    this.paintBtn = document.getElementById("jsPaint");
    this.fillBnt = document.getElementById("jsFill");

    Colors.display();
    this.colors = Array.from(document.getElementsByClassName("jsColor"));

    this.tooltip = new Tooltip();
    this.mode = new this.toolModes();
  }

  toolModes = () => {
    let modelist = {
      filling: null,
      painting: null,
      settingImage: {
        state: false,
        img: null,
        reduceSize: 1,
      },
    };
    return () => ({
      painting: () => {
        modelist.settingImage.state = modelist.filling = false;
        this.paintBtn.style.color = config.SECECT_COLOR;
        this.pointerBtn.style.color = this.fillBnt.style.color = "#000";
      },
      filling: () => {
        modelist.filling = true;
        modelist.settingImage.state = modelist.painting = false;
        this.fillBnt.style.color = config.SECECT_COLOR;
        this.pointerBtn.style.color = this.paintBtn.style.color = "#000";
      },
      settingImage: () => {
        modelist.painting = modelist.filling = false;
        this.pointerBtn.style.color = config.SECECT_COLOR;
        this.paintBtn.style.color = this.fillBnt.style.color = "#000";
      },
      getCurMode: () => modelist,
      setMode: (modes) => {
        Object.entries(modes).forEach(([key, value]) => {
          if (key === "settingImage" || typeof value === "boolean")
            modelist = { ...modelist, ...{ [key]: value } };
        });
      },
    });
  };

  get toolMode() {
    return this.mode().getCurMode();
  }

  set toolMode([key, value]) {
    this.mode().setMode({ [key]: value });
  }

  settingModeBtn(mode) {
    return this.mode()[mode]();
  }

  resetTools() {
    this.range.value = config.LINE_WIDTH;
    this.rangeDiv.children["jsRange"].setAttribute(
      "data-before",
      `${config.LINE_WIDTH} |`
    );

    this.resetPalette();
    this.colors[0].classList.add(config.COLOR_CLICKED_CN);
  }

  resetPalette() {
    this.colors.forEach((color) =>
      color.classList.remove(config.COLOR_CLICKED_CN)
    );
  }

  event() {
    if (this.openBtn)
      this.openBtn.addEventListener("change", this.handleImageInsert);
    if (this.saveBtn)
      this.saveBtn.addEventListener("click", this.handleCanvasSave);

    if (this.rangeBtn) {
      this.rangeBtn.addEventListener("click", () =>
        this.rangeDiv.classList.add(config.RANGE_SHOWING_CN)
      );
      document.addEventListener("click", this.handleRangeDivHiding);
      if (this.range)
        this.range.addEventListener("input", this.handleRangeChange);
    }

    if (this.pointerBtn) {
      this.pointerBtn.addEventListener("mouseover", ({ target }) =>
        this.tooltip.showModal(target)
      );
      this.pointerBtn.addEventListener("mouseleave", () =>
        this.tooltip.closeModal()
      );
    }
    if (this.paintBtn)
      this.paintBtn.addEventListener("click", () =>
        this.settingModeBtn("painting")
      );
    if (this.fillBnt)
      this.fillBnt.addEventListener("click", () =>
        this.settingModeBtn("filling")
      );
    if (this.colors)
      this.colors.forEach((color) =>
        color.addEventListener("click", this.handleColorClick)
      );
  }

  handleColorClick = ({ target }) => {
    const {
      style: { backgroundColor: bgColor },
    } = target;

    this.resetPalette();
    target.classList.add(config.COLOR_CLICKED_CN);

    this.ctx.strokeStyle = bgColor;
    this.ctx.fillStyle = bgColor;
  };

  handleRangeChange = ({ target }) => {
    const { value: size } = target;
    this.ctx.lineWidth = size;
    target.setAttribute("data-before", `${size} |`);
  };

  handleRangeDivHiding = ({
    target: {
      parentNode: { id },
    },
  }) => {
    if (!id.includes("Range"))
      this.rangeDiv.classList.remove(config.RANGE_SHOWING_CN);
  };

  handleImageInsert = ({ target: { files } }) => {
    if (files.length) {
      const url = URL.createObjectURL(files[0]),
        img = new Image(),
        mode = this.mode,
        { settingImage } = mode().getCurMode();

      img.onload = function () {
        const reduceSize =
          (Math.max(...[this.width, this.height]) > config.CANVAS_SIZE
            ? config.CANVAS_SIZE / Math.max(...[this.width, this.height])
            : 1) * config.IMAGE_RATIO;

        mode().settingImage();
        mode().setMode({
          settingImage: {
            ...settingImage,
            ...{ ["state"]: true, img, reduceSize },
          },
        });
      };
      img.src = url;
    }
  };

  handleCanvasSave = () => {
    const link = document.createElement("a");
    link.href = this.canvas.toDataURL();
    link.download = `paint_${new Date().getTime()}`;
    link.click();
  };
}
