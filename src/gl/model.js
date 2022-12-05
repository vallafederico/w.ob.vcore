import { Group } from "three";
import CoinMaterial from "./mat/coin";
import spinMaterial from "./mat/spin";

export class Model extends Group {
  constructor() {
    super();

    this.model = window.app.gl.assets.model;
    this.add(this.model);
    this.traverse();

    // console.log(window.app.scroll.speed);
  }

  render(t) {
    // console.log(t);

    let { speed } = window.app.scroll;
    speed = -speed * 0.003;

    this.rotation.x = this.rotation.z = speed;

    if (this.pcs) {
      this.pcs.spin.forEach((child, i) => {
        const { x, y, z, rand } = child.rotationFactor;
        child.rotation.set(x * (rand + t), y * (rand + t), z * (rand + t));
      });
    }
  }

  traverse() {
    this.pcs = { spin: [] };

    this.model.traverse((child) => {
      if (child.isMesh) {
        this.pcs[child.name] = child;

        if (child.name !== "coin") {
          // SPINNING
          this.pcs.spin.push(child); // to array

          child.material = new spinMaterial();

          child.rotationFactor = getRotationFactor(child.name);
        } else if (child.name === "coin") {
          // COIN
          this.pcs[child.name] = child;
          child.material = new CoinMaterial();
        }
      }
    });

    console.log(this.pcs);
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
