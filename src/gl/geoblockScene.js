import { Scene, Group } from "three";
import gsap from "gsap";
import { Spinning } from "./spinning.js";

export default class extends Scene {
  constructor() {
    super();

    this.create();
    this.initEvents();
  }

  create() {
    this.ctrl = new Group();

    this.spinning = new Spinning();
    this.spinning.pcs.sphere.visible = true;

    this.ctrl.scale.set(0.8, 0.8, 0.8);

    this.ctrl.add(this.spinning);
    this.add(this.ctrl);
  }

  render(t) {
    // render children
    if (this.spinning) this.spinning.render(t, this.mouse);
  }

  resize() {
    this.vp.w = window.innerWidth;
    this.vp.h = window.innerHeight;
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
        duration: 3,
        ex: this.mouse.x,
        ey: this.mouse.y,
        ease: "power3.out",
      });
    };
  }
}
