import gsap from "gsap";

import { assets } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";
import { geoRedirect } from "../../modules/geolocation";

export default class {
  constructor(data) {
    this.data = data;
    this.wrapper = document.querySelector('[data-loader="w"]');

    this.page = document.querySelector('[data-page="w"]');
    gsap.set(this.page, { autoAlpha: 0 });

    this.video = document.querySelector('[data-loader="video"]');
    this.video.addEventListener("ended", () => {});
    this.video.play();

    // console.log(this.video);
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

    tx_faces.flipY = false;

    console.timeEnd("load");

    this.fadeOut();

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

  fadeVideo() {
    gsap.to(this.video, {
      duration: 0.5,
      delay: 0,
      autoAlpha: 0,
      onComplete: () => {
        this.video.remove();
      },
    });
  }

  fadeOut() {
    gsap.to(this.wrapper, {
      duration: 0.5,
      delay: 0,
      autoAlpha: 0,
      onComplete: () => {
        this.wrapper.remove();

        window.scrollTo(0, 0);
        gsap.to(this.page, {
          duration: 0.4,
          delay: 0.1,
          autoAlpha: 1,
          ease: "expo.in",
        });
      },
    });
  }
}
