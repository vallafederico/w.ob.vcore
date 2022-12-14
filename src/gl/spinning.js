import { Group } from "three";

import CoinMaterial from "./mat/coin";
import spinMaterial from "./mat/spin";

import { isMobile } from "../util/agents";

export class Spinning extends Group {
  constructor() {
    super();

    this.model = window.app.gl.assets.model;
    this.traverse();

    this.speedFactor = isMobile() ? 1 : 0.5;

    this.add(this.pcs.sphere, this.pcs.coin);
    this.pcs.sphere.visible = false;
  }

  render(t, { ex, ey }) {
    const time = t * this.speedFactor;
    if (this.pcs?.sphere) {
      // spin coin
      this.pcs.coin.rotation.set(t, Math.sin(t) * 0.4, t);
      // spin armillary
      this.pcs.spin.forEach((child, i) => {
        const { x, y, z, rand } = child.rf;
        child.rotation.set(
          x * (rand + time),
          y * (rand + time),
          z * (rand + time)
        );
      });
    }
  }

  traverse() {
    const [char, model] = this.model.children;

    this.pcs = { spin: [] };

    // *** TRAVERSE coin and spinner
    this.pcs.sphere = new Group();

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

    this.pcs.sphere.add(...this.pcs.spin);
    this.pcs.spin[4].material = new CoinMaterial();

    // console.log(this.pcs);
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
