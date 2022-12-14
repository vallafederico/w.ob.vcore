import Lenis from "@studio-freight/lenis";
import { easeOutExpo } from "../util/easings.js";

export default class extends Lenis {
  constructor() {
    super({
      duration: 0.5,
      smooth: true,
      easing: easeOutExpo,
      direction: "vertical",
      smoothTouch: false,
      touchMultiplier: 2,
    });

    this.isActive = true;
    this.timeFactor = 3;
    this.time = 0;

    this.init();
  }

  init() {
    this.y = window.scrollY;
    this.max = window.innerHeight;
    this.speed = 0;
    this.percent = 0;

    this.changeClass = document.querySelector(".to-gold");

    this.on("scroll", ({ scroll, limit, velocity, progress }) => {
      this.y = scroll || 0;
      this.max = limit || window.innerHeight;
      this.speed = velocity || 0;
      this.percent = progress || 0;

      // change classes on scroll
      if (this.y > window.innerHeight / 2) {
        if (this.changeClass.classList.contains("to-gold"))
          this.changeClass.classList.remove("to-gold");
      } else {
        if (!this.changeClass.classList.contains("to-gold"))
          this.changeClass.classList.add("to-gold");
      }
      //
    });
  }

  resize() {}

  render() {
    if (!this.isActive) return;

    this.raf((this.time += this.timeFactor));
  }

  /**
   * @param {boolean} value
   */
  set active(value) {
    this.isActive = value;
  }
}
