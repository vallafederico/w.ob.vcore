import gsap from "gsap";

import { assets } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";
import { geoRedirect } from "../../modules/geolocation";

export default class {
  constructor(data) {
    this.data = data;
    this.wrapper = document.querySelector('[data-loader="w"]');
  }

  async load() {
    if (geoRedirect()) return; // geo redirect
    console.time("load");

    const [model, mt_black, mt_gold, tx_faces, mt_metal] = await Promise.all([
      loadModel(assets.model),
      loadTexture(assets.mt_black),
      loadTexture(assets.mt_gold),
      loadTexture(assets.tx_faces),
      loadTexture(assets.mt_metal),
    ]);

    console.timeEnd("load");

    tx_faces.flipY = false;

    this.fadeOut();
    window.scroll(0, 0);
    // SPLIT MODEL HERE
    return {
      model: model.scene,
      animations: model.animations,
      mt_black,
      mt_gold,
      tx_faces,
      mt_metal,
    };
  }

  fadeOut() {
    gsap.to(this.wrapper, {
      duration: 0.5,
      delay: 0.2,
      autoAlpha: 0,
      onComplete: () => {
        this.wrapper.remove();
      },
    });
  }
}
