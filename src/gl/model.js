import { Group } from "three";
import { Observe } from "../util/observe.js";

import CoinMaterial from "./mat/coin";
import spinMaterial from "./mat/spin";
import skinMaterial from "./mat/skin";
import skinAltMaterial from "./mat/skin-alt";

export class Model extends Group {
  constructor() {
    super();

    this.model = window.app.gl.assets.model;
    this.traverse();

    this.add(this.pcs.figure);
    this.add(this.pcs.sphere);

    this.pcs.sphere.visible = false;

    this.addEvents();
  }

  addEvents() {
    // data-gl-track="hero"
    // data-gl-track="slider"
    new Observe({
      element: document.querySelector('[data-gl-track="hero"]'),
    }).on("IN", () => {
      this.pcs.figure.visible = true;
      this.pcs.sphere.visible = false;
    });

    new Observe({
      element: document.querySelector('[data-gl-track="slider"]'),
    }).on("IN", () => {
      this.pcs.figure.visible = false;
      this.pcs.sphere.visible = true;
    });
  }

  render(t, { ex, ey }) {
    // params
    let { speed } = window.app.scroll;
    speed = -speed * 0.003;

    if (this.pcs) {
      // rotate figure with mouse
      this.rotation.x = -ey * 0.2;
      this.rotation.y = ex * 0.2;
    }

    if (this.pcs?.sphere) {
      // rotate sphere model with scroll speed
      this.pcs.sphere.rotation.x =
        this.pcs.sphere.rotation.z =
        this.pcs.sphere.rotation.y =
          speed * 1;

      // spin coin
      this.pcs.coin.rotation.set(t, Math.sin(t) * 0.4, t);
      // spin armillary
      this.pcs.spin.forEach((child, i) => {
        const { x, y, z, rand } = child.rf;
        child.rotation.set(x * (rand + t), y * (rand + t), z * (rand + t));
      });
    }
  }

  traverse() {
    const [bone, model] = this.model.children;

    this.pcs = { spin: [] };

    // TRAVERSE coin and spinner
    model.traverse((child) => {
      if (child.isMesh) {
        // console.log(child.name);

        if (child.name.substr(0, 1) === "r") {
          // SPINNING
          this.pcs.spin.push(child); // to array
          child.material = new spinMaterial();
          child.rf = getRotationFactor(child.name);
        } else if (child.name.substr(0, 4) === "coin") {
          // COIN
          this.pcs[child.name] = child;
          child.material = new CoinMaterial();
        }
      }
    });

    // TRAVERSE skinned mesh
    bone.traverse((child) => {
      if (child.isSkinnedMesh) {
        // console.log("skin", child.name);
        this.pcs[child.name.substr(0, 3)] = child;
      } else {
        // console.log("bone", child.name);
      }
    });

    // FIGURE
    this.pcs.ski.material = new skinMaterial();
    this.pcs.bot.material = new skinAltMaterial();
    this.pcs.figure = new Group();
    this.pcs.figure.add(this.pcs.ski, this.pcs.bot);

    // SPINNING
    this.pcs.sphere = new Group();
    this.pcs.sphere.add(this.pcs.coin, ...this.pcs.spin);

    // color one of the spinners
    this.pcs.spin[4].material = new CoinMaterial();
  }
}

/* ---- utils */
function getRotationFactor(name) {
  let rand = Math.random() * 30;

  switch (name.substr(1, 1)) {
    case "v":
      return { x: 0, y: 1, z: 0, rand };
      break;
    case "h":
      return { x: 1, y: 0, z: 0, rand };
      break;
    case "-":
      return { x: 1, y: 1, z: 0, rand };
      break;
    default:
      return { x: 0, y: 0, z: 0, rand };
      break;
  }
}
