import { Group, AnimationMixer } from "three";

import skinMaterial from "./mat/skin";
import skinAltMaterial from "./mat/skin-alt";
import hologramMaterial from "./mat/hologram";
import lightsMaterial from "./mat/lights";

export class Char extends Group {
  constructor() {
    super();

    this.model = window.app.gl.assets.model.children[0];
    this.animations = window.app.gl.assets.animations;

    this.mixer = new AnimationMixer(this.model);
    this.animations.forEach((anim) => {
      this.mixer.clipAction(anim).play();
    });

    this.holoMat = new hologramMaterial();
    this.traverse();

    this.add(this.model);
  }

  resize() {}

  render(t, { x, y }, trans = 0.005) {
    this.holoMat.time = t * 0.4;
    this.holoMat.alpha = trans * 20;

    this.mixer.setTime(trans * 10);
  }

  traverse() {
    const material = new skinMaterial();
    const altMaterial = new skinAltMaterial();

    this.model.traverse((o) => {
      if (o.isMesh) {
        o.material = material;

        if (o.name.substring(0, 4) === "met_") {
          // console.log(o.name);
          o.material = altMaterial;
        } else if (o.name.substring(0, 4) === "hol_") {
          o.material = this.holoMat;
        } else if (o.name === "room") {
          // console.log("room found");
        } else if (o.name.substring(0, 6) === "lights") {
          console.log("lighs found");
          // o.material = new lightsMaterial();
          // o.material.wireframe = true;
        } else if (o.name === "Cube") {
          console.log("cube found");
          // o.material = new lightsMaterial();
          // o.material.wireframe = true;
        }
      }
    });
  }
}
