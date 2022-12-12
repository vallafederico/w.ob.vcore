import { Scene, Group } from "three";
import gsap from "gsap";

import { Observe } from "../util/observe.js";
import { Char } from "./char.js";
import { Spinning } from "./spinning.js";

import { Transform } from "../modules/animation/transform";

export default class extends Scene {
  constructor() {
    super();

    this.create();
    this.initEvents();
  }

  create() {
    this.ctrl = new Group();
    this.ctrl.position.y = -1;

    this.spinning = new Spinning();
    this.char = new Char();

    this.ctrl.add(this.spinning, this.char);
    this.add(this.ctrl);

    this.transform = new Transform({
      el: document.querySelector('[data-gl-track="hero"]'),
    });
  }

  render(t) {
    // transform
    this.transform.render();
    this.ctrl.position.y = -1 + this.transform.perc;

    // rotate mouse
    this.ctrl.rotation.x = 0.2 - this.mouse.ey * 0.1;
    this.ctrl.rotation.y = this.mouse.ex * 0.1;

    // rotate with speed
    let { y } = window.app.scroll;
    y = -y * 0.0008;
    this.spinning.rotation.z = y;

    // render children
    if (this.spinning) this.spinning.render(t, this.mouse);
    if (this.char) this.char.render(t, this.mouse, this.transform.perc);
  }

  resize() {
    this.transform?.resize();
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

    // data-gl-track="hero"
    // data-gl-track="slider"
    new Observe({
      element: document.querySelector('[data-gl-track="hero"]'),
    }).on("IN", () => {
      this.char.visible = true;

      this.spinning.pcs.sphere.visible = false;
    });

    new Observe({
      element: document.querySelector('[data-gl-track="slider"]'),
    }).on("IN", () => {
      this.char.visible = false;

      this.spinning.pcs.sphere.visible = true;
    });
  }
}
