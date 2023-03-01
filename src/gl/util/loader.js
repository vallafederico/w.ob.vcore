import gsap from "gsap";

import { assets } from "../../assets/";
import loadTexture from "./texture-loader";
import loadModel from "./model-loader";
import { geoRedirect } from "../../modules/geolocation";

export default class {
  constructor(data) {
    this.data = data;
    this.wrapper = document.querySelector('[data-loader="w"]');

    // control video from DOM
    this.videoActive = document.querySelector(
      "[data-video-active]"
    ).dataset.videoActive;

    if (this.videoActive === "true") {
      this.videoActive = true;
    } else this.videoActive = false;

    this.page = document.querySelector('[data-page="w"]');
    gsap.set(this.page, { autoAlpha: 0 });

    this.video = document.querySelector('[data-loader="video"]');
    this.videoCookie = handleCookie();

    this.pop = document.querySelector('[data-popup="wrap"]');
  }

  async load() {
    if (window.altApp) {
      const [model, mt_black, mt_gold, mt_metal] = await Promise.all([
        loadModel(assets.model),
        loadTexture(assets.mt_black),
        loadTexture(assets.mt_gold),
        loadTexture(assets.mt_metal),
      ]);

      this.fadeOut();

      // SPLIT MODEL HERE
      return {
        model: model.scene,
        animations: model.animations,
        mt_black,
        mt_gold,
        mt_metal,
      };
    } else {
      if (geoRedirect()) return; // geo redirect

      // console.time("load");
      const [model, mt_black, mt_gold, tx_faces, mt_metal, video] =
        await Promise.all([
          loadModel(assets.model),
          loadTexture(assets.mt_black),
          loadTexture(assets.mt_gold),
          loadTexture(assets.tx_faces),
          loadTexture(assets.mt_metal),
          this.videoActive ? this.fadeVideoIn() : this.jumpVideo(),
        ]);

      tx_faces.flipY = false;
      // console.timeEnd("load");

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
  }

  async fadeVideoIn() {
    return new Promise((resolve) => {
      this.video.addEventListener("ended", () => resolve());
      this.video.play();
    });
  }

  async jumpVideo() {
    this.video.remove();
    new Promise((resolve) => resolve());
  }

  fadeOut() {
    if (window.altApp) return;

    gsap.to(this.wrapper, {
      duration: 0.5,
      delay: 0,
      autoAlpha: 0,
      onComplete: () => {
        this.wrapper.remove();
        this.videoCookie ? this.popupIn() : this.popupOut();

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

  popupIn() {
    gsap.set(this.pop, { autoAlpha: 0 });
    this.pop.style.display = "block";
    gsap.to(this.pop, {
      autoAlpha: 1,
    });
  }
  popupOut() {
    this.pop?.remove();
  }
}

// cookies
function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function handleCookie() {
  // console.log(document.cookie);

  const cname = "vcorevideo";
  const cval = "true";

  const vcookie = getCookie(cname);
  // console.log("vcookie", vcookie);

  if (vcookie) {
    return false;
  } else {
    const exdays = 1;

    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();

    document.cookie = cname + "=" + cval + ";" + expires;

    return true;
  }
}
