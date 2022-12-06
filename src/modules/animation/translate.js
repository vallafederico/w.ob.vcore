import { Observe } from "../../util/observe";
import { gsap } from "gsap";

export class Translate extends Observe {
  constructor({ element, anim }) {
    super({
      element,
      config: {
        root: null,
        margin: "10px",
        threshold: 0.2,
      },
      addClass: "active",
    });

    this.direction = getDirection(element, 80);

    this.anim = {
      d: 1.2,
      ease: "expo.out",
      delay: 0.3,
      each: 0.05,
      from: "start",
      once: false,
      ...anim,
    };

    this.element = element;

    this.animated = this.element.children[0];
  }

  isIn() {
    this.animateIn();
    if (this.anim.once) this.stop();
  }

  isOut() {
    this.setOut();
  }

  animateIn() {
    if (this.animation) this.animation.kill();

    this.animation = gsap.to(this.animated, {
      y: "0%",
      x: "0%",
      autoAlpha: 1,
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: this.anim.delay,
    });
  }

  animateOut() {
    // this.stop();
    if (this.animation) this.animation.kill();

    this.animation = gsap.to(this.animated, {
      ...this.direction,
      autoAlpha: 0,
      duration: this.anim.d,
      ease: this.anim.ease,
      delay: 0,
    });
  }

  setIn() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { y: "0%", x: "0%", autoAlpha: 1 });
  }

  setOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.animated, { ...this.direction, autoAlpha: 0 });
  }
}

function getDirection(element, power = 50) {
  const direction = element.dataset.a;

  switch (direction) {
    case "up":
      return { x: "0%", y: `${power}%` };
      break;
    case "down":
      return { x: "0%", y: `-${power}%` };
      break;
    case "left":
      return { x: `-${power}%`, y: "0%" };
      break;
    case "right":
      return { x: `${power}%`, y: "0%" };
      break;
    default:
      return { x: "0%", y: "0%" };
  }
}
