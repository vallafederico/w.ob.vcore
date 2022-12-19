import { Scene, Group } from "three";
import gsap from "gsap";

import { Observe } from "../util/observe.js";
import { Char } from "./char.js";
import { Spinning } from "./spinning.js";

import { Transform } from "../modules/animation/transform.js";

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
      config: {
        bounds: [0.001, 0.9],
      },
    });

    this.setSliderTriggers();
  }

  setSliderTriggers() {
    const trigs = [...document.querySelectorAll("[data-slider-trigger]")];
    this.slider = {
      x: 0,
      rz: 0,
      z: 0,
      isIn: false,
    };

    const pos = [
        { x: 0.7, rz: -2, z: 0 },
        { x: -0.7, rz: -4, z: 0.2 },
        { x: 0.7, rz: -6, z: 0.5 },
        { x: -0.7, rz: -8, z: 0.2 },
      ],
      resetPos = { x: 0, rz: 0, z: 0 };

    const movePos = (val) => {
      gsap.to(this.slider, {
        duration: 0.8,
        ease: "power3.out",
        x: val.x || 0,
        rz: val.rz || 0,
        z: val.z || 0,
      });
    };

    trigs.forEach((trig, i) => {
      // trig.style.border = "1px solid red";

      const ob = new Observe({
        element: trig,
        config: {
          margin: "10%",
          threshold: 1,
        },
      }).on("IN", () => {
        movePos(pos[i]);
      });

      // console.log(ob.config.treshold);
    });

    new Observe({
      element: document.querySelector("[data-gl-slidermvmt]"),
    }).on("OUT", () => {
      movePos({ x: 0, rz: 0, z: 0 });
    });
  }

  render(t) {
    // transform
    this.transform.render();
    // this.tra.render();

    this.ctrl.position.y = -1 + this.transform.perc;
    this.ctrl.position.x = this.slider.x;
    this.ctrl.position.z = this.slider.z;

    // rotate mouse
    this.ctrl.rotation.x = 0.2 - this.mouse.ey * 0.1;
    this.ctrl.rotation.y = this.mouse.ex * 0.1;

    // rotate with speed
    let { y } = window.app.scroll;
    y = -y * 0.0008;
    this.spinning.rotation.z = y + this.slider.rz;

    // render children
    if (this.spinning) this.spinning.render(t, this.mouse);
    if (this.char) this.char.render(t, this.mouse, this.transform.perc);
  }

  resize() {
    this.transform?.resize();
    this.tra?.resize();
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
      element: document.querySelector("[data-gl-slidermvmt]"),
    }).on("IN", () => {
      this.char.visible = false;

      this.spinning.pcs.sphere.visible = true;
    });
  }
}
