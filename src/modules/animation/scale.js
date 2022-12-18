import gsap from "gsap";
import { Observe } from "../../util/observe";

export class Scale extends Observe {
  constructor({ element }) {
    super({
      element,
    });
    this.element = element;

    gsap.set(this.element, {
      scaleY: 0,
      transformOrigin: "top right",
    });
  }

  isIn() {
    this.animation = gsap.to(this.element, {
      scaleY: 1,
      duration: 1.8,
      delay: 0.2,
      ease: "expo.out",
    });
  }

  isOut() {
    if (this.animation) this.animation.kill();
    gsap.set(this.element, {
      scaleY: 0,
    });
  }
}
