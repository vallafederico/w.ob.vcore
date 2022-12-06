import { Scene } from "three";
import gsap from "gsap";

import { Model } from "./model.js";

export default class extends Scene {
  constructor() {
    super();

    this.create();
    this.initEvents();
  }

  initEvents() {
    this.vp = {
      w: window.innerWidth,
      h: window.innerHeight,
    };

    this.mouse = {
      x: 0,
      y: 0,
      ex: 0,
      ey: 0,
    };

    window.onmousemove = ({ clientX, clientY }) => {
      this.mouse.x = (clientX / this.vp.w) * 2 - 1;
      this.mouse.y = ((clientY / this.vp.h) * 2 - 1) * -1;

      gsap.to(this.mouse, {
        duration: 1,
        ex: this.mouse.x,
        ey: this.mouse.y,
        ease: "power3.out",
      });
    };
  }

  create() {
    this.model = new Model();
    this.add(this.model);
  }

  render(t) {
    if (this.model) this.model.render(t, this.mouse);
  }

  resize() {
    this.vp.w = window.innerWidth;
    this.vp.h = window.innerHeight;
  }
}
