import { Text } from "./animation/text";
import { Translate } from "./animation/translate";
import { Alpha } from "./animation/alpha";
import { Slider } from "./slider";
import { Mobile } from "./mobile";
import { Scale } from "./animation/scale";

export default class {
  constructor() {
    this.createText();
    this.createAnimation();
    this.createSlider();

    this.mobile = new Mobile();
  }

  resize() {}

  /* -- Text */

  createText() {
    const chars = [...document.querySelectorAll('[data-a="char"]')];
    const words = [...document.querySelectorAll('[data-a="word"]')];
    const lines = [...document.querySelectorAll('[data-a="line"]')];

    this.text = {
      chars: chars.map((el) => new Text({ element: el })),
      words: words.map((el) => new Text({ element: el })),
      lines: lines.map((el) => new Text({ element: el })),
    };
  }

  destroyText() {
    this.text.chars.forEach((char) => char.animateOut());
    this.text.words.forEach((word) => word.animateOut());
    this.text.lines.forEach((line) => line.animateOut());
  }

  createAnimation() {
    this.translateUp = [
      ...document.querySelectorAll(
        '[data-a="up"], [data-a="down"], [data-a="left"], [data-a="right"]'
      ),
    ].map((el) => new Translate({ element: el, anim: { d: 1.8 } }));

    this.alpha = [...document.querySelectorAll('[data-a="alpha"]')].map(
      (el) => new Alpha({ element: el })
    );

    // console.log(document.querySelectorAll('[data-a-scale="y"]'));
    this.scale = [...document.querySelectorAll('[data-a-scale="y"]')].map(
      (el) => new Scale({ element: el })
    );
  }

  createSlider() {
    const el = document.querySelector("[data-slider='wrapper']");
    if (el) this.slider = new Slider(el);

    const elLeaders = document.querySelector("[data-leader='wrapper']");
    if (elLeaders) this.slider = new Slider(elLeaders);
  }

  /* --  Pages */

  transitionOut(page) {
    // console.log("DOM•tranOut", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  transitionIn(page) {
    // console.log("DOM•tranIn", page);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
}
