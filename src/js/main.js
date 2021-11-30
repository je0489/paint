import "../scss/styles.scss";
import Base_layers from "./core/base-layers";

window.addEventListener("load", () => {
  const layers = new Base_layers();
  layers.event();
});
