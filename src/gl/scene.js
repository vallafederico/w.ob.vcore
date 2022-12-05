import { Scene } from "three";
// import Quad from "./quad.js";
import { Model } from "./model.js";

export default class extends Scene {
  constructor() {
    super();

    this.create();
  }

  create() {
    this.model = new Model();
    this.add(this.model);
  }

  render(t) {
    if (this.model) this.model.render(t);
  }

  resize() {}
}
